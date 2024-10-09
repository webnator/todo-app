const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  getFromStorage: (key) => localStorage.getItem(key),
  setToStorage: (key, value) => localStorage.setItem(key, value)
});
