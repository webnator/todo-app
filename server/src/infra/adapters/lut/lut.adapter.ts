type TableOptions = {
  ttl?: number;
  size?: number;
}

type LUTTable = {
  ttl: number;
  size: number;
  data: Record<string, {
    time: number;
    value: unknown;
  }>;
}

type LUTCollection = Record<string, LUTTable>;

const DEFAULT_TABLE_SIZE = 50;

export default () => {
  const LUT: LUTCollection = {};

  return {
    initialize(name: string, { ttl = 0, size = DEFAULT_TABLE_SIZE }: TableOptions = {}): void {
      if (LUT[name]) { throw 'Table already exists'; }
      LUT[name] = { ttl, size, data: {} };
    },

    getTable(name: string): LUTTable  {
      return LUT[name];
    },

    get<T = unknown>(name: string, key: string): T {
      if (!LUT[name]) { throw 'Table does not exist'; }
      if (!LUT[name].data[key]) { return; }
      const currentTime = new Date().getTime();
      if (LUT[name].ttl > 0 && (currentTime - LUT[name].data[key].time) > LUT[name].ttl) {
        delete LUT[name].data[key];
        return;
      }
      return LUT[name].data[key].value as T;
    },

    set(name: string, key: string, value: unknown): void {
      if (!LUT[name]) { throw 'Table does not exist'; }
      if (!LUT[name].data[key]) {
        if (Object.keys(LUT[name].data).length >= LUT[name].size) {
          delete LUT[name].data[Object.keys(LUT[name].data)[0]];
        }
      }
      LUT[name].data[key] = {
        time: new Date().getTime(),
        value,
      };
    },

    remove(name: string, key: string): void {
      if (!LUT[name]) { throw 'Table does not exist'; }
      delete LUT[name].data[key];
    },

    flush(name: string): void {
      if (LUT[name]) {
        LUT[name].data = {};
      }
    },
  };
};
