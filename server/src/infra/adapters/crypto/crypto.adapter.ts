import baseConfig from '../../../config/base.config';
import { Dependencies } from '../../../container';
import { InvalidCredentials } from '../../../domain/primitives/exceptions';
import CryptoAdapterInterface from '../../../usecases/abstractions/cryptoAdapter.interface';

export default ({ logger, bcrypt, crypto, jwt }: Dependencies): CryptoAdapterInterface => {
  const iv = Buffer.from(baseConfig.ENCRYPTION_IV, 'hex');
  return {
    async hash(value: string, salt = ''): Promise<string> {
      try {
        const hash = await bcrypt.hash(`${value}_${salt}`, baseConfig.CRYPTO_HASHING_ROUNDS);
        return hash;
      } catch (error) {
        logger.error({ value, salt }, 'Error while hashing value');
        throw InvalidCredentials;
      }
    },

    async compare(value = '', hash = '', salt = ''): Promise<boolean> {
      try {
        const match = await bcrypt.compare(`${value}_${salt}`, hash);
        return match;
      } catch (error) {
        logger.error({ value, salt }, 'Error while comparing values');
        throw InvalidCredentials;
      }
    },

    encrypt(value: string, salt = ''): string {
      const secretKey = crypto.scryptSync(salt, baseConfig.ENCRYPTION_KEY, baseConfig.ENCRYPTION_SIZE);
      const cipher = crypto.createCipheriv(baseConfig.ENCRYPTION_ALGORITHM, secretKey, iv);
      let encrypted = cipher.update(value, 'utf8', 'hex');
      encrypted += cipher.final('hex');
      return encrypted;
    },

    decrypt(value: string, salt = ''): string {
      const secretKey = crypto.scryptSync(salt, baseConfig.ENCRYPTION_KEY, baseConfig.ENCRYPTION_SIZE);
      const decipher = crypto.createDecipheriv(baseConfig.ENCRYPTION_ALGORITHM, secretKey, iv);
      let decrypted = decipher.update(value, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      return decrypted;
    },

    jwtSignObject<T>(value: T): string {
      return jwt.sign(JSON.stringify(value), baseConfig.ENCRYPTION_KEY);
    },

    jwtVerifyObject<T>(value: string): T {
      return jwt.verify(value, baseConfig.ENCRYPTION_KEY) as T;
    }
  };
};
