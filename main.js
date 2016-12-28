const electron = require('electron');
const path = require('path');
const url = require('url');

function createWindow () {
  // Create the browser window.
  let mainWindow = new electron.BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true
  }));

}
electron.app.on('ready', createWindow);