import { RequestHandler } from 'express';
import { middleware as openApiMiddleware } from 'express-openapi-validator';
import { Response as ExpressResponse } from 'express-serve-static-core';
import { IncomingMessage } from 'http';
import config from '../../../config/base.config';
import { Dependencies } from '../../../container';
import User from '../../../domain/User/User';
import Response from '../../../domain/primitives/Response';
import { InternalError } from '../../../domain/primitives/exceptions';
import LoggerInterface from '../../../domain/primitives/logger.interface';
import errorMiddleware from './middlewares/error.middleware';
import loggerMiddleware from './middlewares/logger.middleware';
import requestID from './middlewares/requestId.middleware';
import sanitizerMiddleware from './middlewares/sanitizer.middleware';
import { extractParams } from './model/params.model';
import APIResponse from './response.model';

type ServerConfig<LoginTypes extends string> = {
  port: number;
  sslPort?: number;
  host: string,
  controllersPath: string;
  apiDefinition;
  middlewares?: { path: string, handler: RequestHandler }[];
  authHandlers?: Record<LoginTypes, (req, scopes: string[], schema?) => Promise<boolean>>;
}

export type ServerRequest = Express.Request & IncomingMessage & {
  route?: {
    path: string;
  };
  params: Record<string, unknown>;
  body: Record<string, unknown>;
  query: Record<string, unknown>;
  headers: Record<string, unknown>;
  logger: LoggerInterface;
  id: string;
  session: User;
};

type Handler<T> = (req: ServerRequest, res: ExpressResponse) => Promise<T>;
type FileResponse = {
  data: Buffer;
  type: string;
  name: string;
};

function getChildLog(req: ServerRequest): LoggerInterface {
  return req.logger.child({
    entrypoint: req.route?.path,
    method: req.method,
    loggedEntityId: req.session?.id,
    referer: req.headers.referer,
  });
}

function buildResponseFromError(error: unknown, req: ServerRequest, childLog: LoggerInterface): APIResponse {
  if (error instanceof Response) {
    childLog.debug({ error }, 'Error executing controller');
    return new APIResponse(error, req);
  } else {
    const params = JSON.stringify(req.params);
    childLog.fatal({ error, params }, 'Unhandled error executing controller');
    return new APIResponse(InternalError, req);
  }
}

export const requestHandler = (fn: Handler<APIResponse>) => async (req: ServerRequest, res: ExpressResponse) => {
  const childLog = getChildLog(req);
  childLog.debug('Executing');
  let response;
  try {
    extractParams(req);
    response = await fn(req, res);
    childLog.debug('Executed correctly');
  } catch (error) {
    response = buildResponseFromError(error, req, childLog);
  } finally {
    res.set('Content-Type', 'application/json');
    res.status(response.statusCode).send(response.build());
  }
};

export const redirectHandler = (fn: Handler<string>) => async (req: ServerRequest, res: ExpressResponse) => {
  const childLog = getChildLog(req);
  childLog.debug('Executing redirect');
  try {
    extractParams(req);
    const url = await fn(req, res);
    childLog.debug('Executed correctly');
    res.redirect(url);
  } catch (error) {
    const response = buildResponseFromError(error, req, childLog);
    res.status(response.statusCode).send(response.build());
  }
};

export const downloadHandler = (fn: Handler<FileResponse>) => async (req: ServerRequest, res: ExpressResponse) => {
  const childLog = getChildLog(req);
  childLog.debug('Executing download');
  try {
    const { data, type, name } = await fn(req, res);
    childLog.debug('Executed correctly');
    if (name) {
      res.attachment(name);
    }
    res.type(type);
    res.write(data, 'binary');
    res.end();
  } catch (error) {
    const response = buildResponseFromError(error, req, childLog);
    res.status(response.statusCode).json(response.build());
  }
};

export default ({
  express,
  logger,
  compression,
  helmet,
  cors,
  wsAdapter,
}: Dependencies) => {
  const app = express();
  return async <L extends string>(serverConfig: ServerConfig<L>) => {
    app.use(cors({
      origin: config.SERVER.CORS_WHITELIST,
      credentials: true,
      maxAge: 3600,
    }));

    app.use(requestID());
    app.use(helmet({
      contentSecurityPolicy: false,
      crossOriginResourcePolicy: { policy: 'cross-origin' },
    }));
    app.use(compression());

    // Attach logger
    app.use(loggerMiddleware(logger));

    app.use(express.json());
    app.use(express.text());
    app.use(express.urlencoded({ extended: true }));

    // Rate limiting TODO
    // const fileUrl = new URL(serverConfig.apiDefinition, import.meta.url);
    // const apiDefinition = JSON.parse(readFileSync(fileUrl));
    // Object.keys(apiDefinition.paths).forEach(path => {
    //   const pathDefinition = apiDefinition.paths[ path ];
    //   Object.keys(pathDefinition)
    //     .filter(key => [ 'get', 'post', 'put', 'patch', 'delete' ].includes(key.toLowerCase()))
    //     .forEach(method => {
    //       const rateLimitConfig = pathDefinition[ method ][ 'x-rate-limit' ];
    //       if (rateLimitConfig) {
    //         app[ method ](path, throttleMiddleware(rateLimitConfig));
    //       }
    //     });
    // });

    // Register sanitizer middleware
    app.use(sanitizerMiddleware);

    app.use('/spec', express.static(serverConfig.apiDefinition));
    app.use(
      openApiMiddleware({
        apiSpec: serverConfig.apiDefinition,
        validateRequests: true, // (default)
        // validateResponses: true, // false by default
        operationHandlers: serverConfig.controllersPath,
        validateSecurity: {
          handlers: serverConfig.authHandlers,
        },
      })
    );
    
    app.use(errorMiddleware);

    const httpServer = app.listen(serverConfig.port, serverConfig.host);
    if (serverConfig.sslPort) {
      app.listen(serverConfig.sslPort, serverConfig.host);
    }
    wsAdapter.registerServer(httpServer);
    logger.debug(`Your server is listening on port ${serverConfig.port} (http://${serverConfig.host}:${serverConfig.port})`);
    logger.debug(`Swagger-ui is available on http://${serverConfig.host}:${serverConfig.port}/docs`);
  };
};
