import config from '../../config/base.config';

export default ({ pino }) => pino({
  level: config.LOG_LEVEL,
  serializers: { err: pino.stdSerializers.err, error: pino.stdSerializers.err },
});
