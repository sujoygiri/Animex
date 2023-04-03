const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const { createWriteStream } = require('node:fs');
const { pipeline } = require('node:stream');
const { promisify } = require('node:util');
const path = require('node:path');
const os = require('node:os')
const nodefetch = require('node-fetch');

const imageUrlArray = [];
let imageIndex = -1;
const urlObj = {
    disabledButtonStatus: Boolean,
    url: String
};

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            preload: path.join(__dirname, './preload.cjs')
        }
    });

    mainWindow.loadURL('http://localhost:5173/');
};

const getUrlFromApi = async (typeAndCategory) => {
    let response = await nodefetch(`https://api.waifu.pics/${typeAndCategory.type}/${typeAndCategory.category}`);
    let data = await response.json();
    let url = data.url;
    imageUrlArray.push(url);
    imageIndex += 1;
    return url;
};

ipcMain.handle('genarateUrl', async (event, typeAndCategory) => {
    if(imageUrlArray.length >= 1){
        urlObj.disabledButtonStatus = false;
    }else{
        urlObj.disabledButtonStatus = true;
    }
    urlObj.url = await getUrlFromApi(typeAndCategory);
    return urlObj;
});

ipcMain.handle('previousUrl', (event) => {
    if (imageIndex === 0) {
        urlObj.disabledButtonStatus = true;
        urlObj.url = imageUrlArray[imageIndex];
        return urlObj;
    } else {
        imageIndex -= 1;
        urlObj.disabledButtonStatus = false;
        urlObj.url = imageUrlArray[imageIndex];
        return urlObj;
    }
});

ipcMain.handle('nextUrl', async (event, typeAndCategory) => {
    if (imageIndex === (imageUrlArray.length - 1)) {
        urlObj.disabledButtonStatus = false;
        urlObj.url = await getUrlFromApi(typeAndCategory);
        return urlObj;
    } else {
        imageIndex += 1;
        urlObj.disabledButtonStatus = false;
        urlObj.url = imageUrlArray[imageIndex];
        return urlObj;
    }
});

ipcMain.handle('downloadImage',async (event,imageUrl)=>{
    let splitImageUrl = imageUrl.split('/')
    let imageFileName = splitImageUrl[splitImageUrl.length - 1]
    let defaultImageSavingPath = path.join(os.homedir() + '/' + imageFileName)
    let imageSavingPath = dialog.showSaveDialogSync({
        defaultPath:defaultImageSavingPath,
        filters: [
            { name: 'Images', extensions: ['jpg', 'png', 'gif', 'jpeg'] }
        ]
    })
    if(imageSavingPath){
        let streamPipeline = promisify(pipeline);
        let response = await nodefetch(imageUrl);
        if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
        await streamPipeline(response.body, createWriteStream(imageSavingPath));
    }
})

app.whenReady().then(() => {
    createWindow();
});