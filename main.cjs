const { app, BrowserWindow } = require('electron');
const path = require('node:path');

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            preload: path.join(__dirname, './preload.js')
        }
    });

    mainWindow.loadURL('http://localhost:5173/');
};

app.whenReady().then(() => {
    createWindow();
});