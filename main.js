const { app, BrowserWindow } = require("electron")
const path = require("node:path")

console.log("Hello from Electron 🌮")

const createWindow = () => {
   const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
         preload: path.join(__dirname, "preload.js"),
         sandbox: false // grants preload access to node:fs
      }
   })

   win.loadFile("index.html")

   win.webContents.openDevTools()
}

app.whenReady().then(() => {
   createWindow()

   app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
         createWindow()
      }
   })
})

app.on("window-all-closed", () => {
   if (process.platform !== "darwin") app.quit()
})
