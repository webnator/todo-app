import rateLimit from 'express-rate-limit';
import baseConfig from '../../../../config/base.config';

type ThrottleConfig = {
  timeLimit?: number;
  maxRequests?: number;
}

export default ({ timeLimit, maxRequests }: ThrottleConfig = {}) => rateLimit({
  windowMs: timeLimit ?? baseConfig.THROTTLE.TIME_LIMIT,
  max: maxRequests ?? baseConfig.THROTTLE.MAX_REQUESTS,
  message: 'You have exceeded the request limit',
  standardHeaders: true,
  legacyHeaders: true,
});
