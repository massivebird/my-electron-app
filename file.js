document.getElementById("createButton").onclick = function() {
   window.file.createFile()
}

document.getElementById("removeButton").onclick = function() {
   window.file.removeFile()
}

document.getElementById("viewButton").onclick = function() {
   const element = document.getElementById("contents");

   const timestamp = window.file.getTimeStamp().substring(0, 8);

   if (!window.file.fileExists()) {
      element.innerHTML = `${timestamp} : File does not exist.`
      return;
   }

   const contents = window.file.getFileContents();

   element.innerText = `${timestamp} : ${contents}`;
}
