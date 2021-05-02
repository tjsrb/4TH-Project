function CreateDragDrop() {
  this.dropzonElem = document.createElement("div");
  this.dropzonElem.classList.add("img-upload-area");

  //   AddDropzonEvent
  this.dropZonEventHandler("dragover");
  this.dropZonEventHandler("dragleave");
  this.dropZonEventHandler("drop");``

  this.uploadBtnContainerElem = document.createElement("div");
  this.uploadBtnContainerElem.classList.add("upload-btn-con");

  this.inputForUploadElem = document.createElement("input");
  this.inputForUploadElem.setAttribute("type", "file");
  this.inputForUploadElem.setAttribute("id", "fileUploadInput");
  this.inputForUploadElem.setAttribute("multiple", "multiple");

  this.labelForUploadElem = document.createElement("label");
  this.labelForUploadElem.setAttribute("for", "fileUploadInput");
  this.labelForUploadElem.innerText = "직접업로드하기";

  this.uploadBtnContainerElem.appendChild(this.labelForUploadElem);
  this.uploadBtnContainerElem.appendChild(this.inputForUploadElem);

  this.dropzonElem.innerHTML = `<p>
    드래그앤 드랍 하여<br> 이미지 업로드
</p>`;
  this.dropzonElem.appendChild(this.uploadBtnContainerElem);

  return this.dropzonElem;
}

CreateDragDrop.prototype = {
  constructor: CreateDragDrop,
  eventFree: function (e) {
    e.stopPropagation();
    e.preventDefault();
  },
  dropZonEventHandler: function (type) {
    this.dropzonElem.addEventListener(type, (e) => {
      this.eventFree(e);
      switch (type) {
        case "dragover":
          this.dropzonElem.style.backgroundColor = "#FFA873";
          this.dropzonElem.style.outlineOffset = "-20px";
          break;
        case "dragleave":
          this.dropzonElem.style.backgroundColor = "rgb(255, 227, 211)";
          this.dropzonElem.style.outlineOffset = "-10px";
          break;
        case "drop":
          let files = e.dataTransfer && e.dataTransfer.files;
          for(let i=0;i<files.length;i++){
              const file = files[i];
              const UUID = this.getUUID();
              // uploadFileArr.push({
              //     file:file,
              //     id:UUID
              // });
          }
          break;
      }
    });
  },
  getUUID: function () {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  },
  
};
