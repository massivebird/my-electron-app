const { contextBridge } = require('electron/renderer')
const fs = require("node:fs")

contextBridge.exposeInMainWorld('versions', {
   node: () => process.versions.node,
   chrome: () => process.versions.chrome,
   electron: () => process.versions.electron
})

contextBridge.exposeInMainWorld('file', {
   createFile: () => {
      const path = '/tmp/electronfile'
      const contents = "Garrett's Electron app sends its regards"

      fs.writeFile(path, contents, function(err) {
         if (err) throw err;
         console.log(`Wrote file ${path}.`);
      });
   }
})
