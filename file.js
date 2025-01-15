document.getElementById("createButton").onclick = function() {
   window.file.createFile()
}

document.getElementById("removeButton").onclick = function() {
   window.file.removeFile()
}

document.getElementById("viewButton").onclick = function() {
   const contents = window.file.getFileContents()
   document.getElementById("contents").innerText = contents;
}
