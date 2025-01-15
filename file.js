document.getElementById("createButton").onclick = function() {
   window.file.createFile()
}

document.getElementById("removeButton").onclick = function() {
   window.file.removeFile()
}

document.getElementById("viewButton").onclick = function() {
   const setText = function (string) {
      const timestamp = window.file.getTimeStamp().substring(0, 8);
      document.getElementById("contents").innerHTML = `${timestamp} : ${string}`
   }

   if (!window.file.fileExists()) {
      setText(`File does not exist.`)
      return;
   }

   const contents = window.file.getFileContents();

   setText(`${contents}`);
}
