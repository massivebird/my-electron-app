const { app, BrowserWindow } = require("electron")
const path = require("node:path")
const fs = require("node:fs")

console.log("Hello from Electron 🌮")

const createWindow = () => {
   const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
         preload: path.join(__dirname, "preload.js")
      }
   })

   win.loadFile("index.html")

   fs.writeFile('mynewfile3.txt', 'Hello content!', function(err) {
      if (err) throw err;
      console.log('Saved!');
   });

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
