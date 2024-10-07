import httpStatusCodes from 'http-status-codes';
import Response from '../../../../domain/primitives/Response';

const errorTypes = {
  SecurityError: httpStatusCodes.BAD_REQUEST,
  Unauthorized: httpStatusCodes.UNAUTHORIZED,
};

export default (error, req, res, next) => {
  let response: Response;
  let errors: string[];

  // Just doing the typeof so that the linter doesnt complain that next parameter is not being used. Probably there's a cleaner workaround
  if (errorTypes[error?.name] && typeof next === 'function') {
    response = new Response({
      statusCode: errorTypes[error.name],
      message: error.message,
      code: `PIC${errorTypes[error.name]}00`,
    });
  } else if (error.status === httpStatusCodes.BAD_REQUEST) {
    response = new Response({
      statusCode: httpStatusCodes.BAD_REQUEST,
      message: error.name,
      code: 'PIC40000',
    });
    if (error.errors && error.errors.length > 0) {
      errors = error.errors.map(({ message, path }) => `${path}: ${message}`);
    }
  } else if (error instanceof Error) {
    response = new Response({
      statusCode: httpStatusCodes.INTERNAL_SERVER_ERROR,
      message: httpStatusCodes.getStatusText(httpStatusCodes.INTERNAL_SERVER_ERROR),
      code: 'PIC50000',
    });
    errors = [ error.message ];
  } else  if (error instanceof Response) {
    response = error;
  }

  res.status(response.statusCode).json({
    result: {
      code: response.code,
      message: response.message,
      errors: errors,
    },
  });
};
