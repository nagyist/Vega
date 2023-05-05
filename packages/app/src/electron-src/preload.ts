import { IpcRenderer, ipcRenderer } from "electron";

declare global {
  namespace NodeJS {
    interface Global {
      ipcRenderer: IpcRenderer;
    }
  }
}

process.once("loaded", () => {
  // @ts-ignore
  global.ipcRenderer = ipcRenderer;
});
