'use babel';

import app from 'app';
import BrowserWindow from 'browser-window';

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
