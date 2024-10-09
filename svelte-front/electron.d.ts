interface Window {
  electron: {
    getFromStorage(key: string): string | null;
  }
}
