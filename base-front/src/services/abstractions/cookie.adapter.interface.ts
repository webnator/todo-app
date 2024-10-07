
interface CookieAdapterInterface {
  get<T>(name: string): T | undefined;
  set<T extends Record<string, any>>(name: string, value: T): void;
  remove(name: string): void;
}

export default CookieAdapterInterface;
