const { contextBridge } = require('electron/renderer')
const fs = require("node:fs")

const path = '/tmp/electronfile'
const contents = "Garrett's Electron app sends its regards"

contextBridge.exposeInMainWorld('file', {
   createFile: () => {
      fs.writeFile(path, contents, function(err) {
         if (err) throw err;
         console.log(`Wrote file ${path}.`);
      });
   },
   removeFile: () => {
      fs.rm(path, function () {}) // is a dummy function a valid callback?
      console.log(`Removed file ${path}.`)
   },
   getFileContents: () => {
      return fs.readFileSync(path).toString();
   }
})
