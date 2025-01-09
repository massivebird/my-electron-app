const { contextBridge } = require('electron/renderer')

contextBridge.exposeInMainWorld('versions', {
   node: () => process.versions.node,
   chrome: () => process.versions.chrome,
   electron: () => process.versions.electron
})

contextBridge.exposeInMainWorld('file', {
   createFile: () => {
      const file = new File(["Hello, World!"], "electronfile", { type: "text/plain" });
      fs.writeFile('mynewfile3.txt', 'Hello content!', function(err) {
         if (err) throw err;
         console.log('Saved!');
      });
   }
})
