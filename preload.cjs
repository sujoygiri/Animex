const { ipcRenderer, contextBridge } = require('electron');


contextBridge.exposeInMainWorld('electron',{
    urlApi:{
        async getUrl(typeAndCategory) {
            let urlObj = await ipcRenderer.invoke('genarateUrl',typeAndCategory)
            return urlObj
        },
        async previousUrl(){
            let urlObj = await ipcRenderer.invoke('previousUrl')
            return urlObj
        },
        async nextUrl(typeAndCategory){
            let urlObj = await ipcRenderer.invoke('nextUrl',typeAndCategory)
            return urlObj
        }
    },
    handelImage:{
        async downloadImage(imageUrl){
            await ipcRenderer.invoke('downloadImage',imageUrl)
        }
    }
})