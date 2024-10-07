interface CryptoAdapterInterface {
  hash(value: string, salt?: string): Promise<string>;
  compare(value: string, hash?: string, salt?: string): Promise<boolean>;
  encrypt(value: string, salt?: string): string;
  decrypt(value: string, salt?: string): string;
  jwtSignObject<T>(value: T): string;
  jwtVerifyObject<T>(value: string): T;
}

export default CryptoAdapterInterface;
