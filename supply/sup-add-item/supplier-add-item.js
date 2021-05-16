(() => {
  const itemName = new CustomInput("inputInfoArea", "상품명",[]);
  console.log(itemName)
  const tags = new CustomInput("inputInfoArea", "태그",[]);
  const price = new CustomInput("inputInfoArea", "가격",[]);
  const test = new CustomInput("inputInfoArea", "배송비",[]);

  const imgContainerElem = document.getElementById("uploaded-img-con");

  function uploadProcess() {
    let fileUploadArr = new Array();

    function createImgElem(fileData) {
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("img-remove-btn");
      deleteBtn.dataset.id = fileData.id;
      deleteBtn.innerText = "X";

      deleteBtn.addEventListener("click", (e) => {
        for (var i = 0; i < fileUploadArr.length; i++) {
          if (fileUploadArr[i]["id"] === e.target.dataset.id) {
            fileUploadArr.splice(i, 1);
            document.getElementById(e.target.dataset.id).remove();
            if (fileUploadArr.length === 4) {
              imgContainerElem.appendChild(dropzonElem);
            }
            return;
          }
        }
      });

      let uploadedElem = document.createElement("div");
      uploadedElem.classList.add("uploaded-img");
      uploadedElem.setAttribute("id", fileData.id);
      uploadedElem.style.backgroundImage = `url('${window.URL.createObjectURL(
        fileData.file
      )}')`;
      uploadedElem.appendChild(deleteBtn);
      imgContainerElem.appendChild(uploadedElem);
    }

    return {
      filePush: function (fileDataArr) {
        if (fileUploadArr.length + fileDataArr.length > 5) {
          alert("업로드 가능한 파일은 최대 5개 입니다.");
          return;
        }
        fileDataArr.map((data) => {
          fileUploadArr.push(data);
          createImgElem(data);
        });
        dropzonElem.remove();
        if (fileUploadArr.length !== 5) {
          dropzonElem.classList.add("uploaded-img");
          imgContainerElem.appendChild(dropzonElem);
        }
      },
    };
  }

  const colorOptionAppenElem = document.getElementById("colorOptionAppend");
  const sizeOptionAppenElem = document.getElementById("sizeOptionAppend");

  function createColorInput(count) {
    const colorContainer = document.createElement("div");
    colorContainer.setAttribute("id", `colorContainer${count}`);
    colorContainer.classList.add("choos-color-container");
    const colorInput = document.createElement("input");
    colorInput.setAttribute("type", "color");
    colorInput.setAttribute("id", `color-input-${count}`);

    colorInput.addEventListener("change", () => {
      colorLabel.innerHTML = ``;
      colorLabel.style.backgroundColor = colorInput.value;
    });
    const colorLabel = document.createElement("label");
    colorLabel.classList.add("choos-color");
    colorLabel.setAttribute("for", `color-input-${count}`);
    colorLabel.innerHTML = '<i class="fas fa-eye-dropper"></i>';
    const colorInputText = document.createElement("input");
    colorInputText.setAttribute("type", "text");
    colorInputText.setAttribute("placeholder", "색상명");
    const delBtn = document.createElement("button");
    delBtn.dataset.count = count;
    delBtn.classList.add("add-color-option");
    delBtn.innerHTML = '<i class="fas 127.0.0.1:5501s"></i>';

    delBtn.addEventListener("click", () => {
      document.getElementById(`colorContainer${delBtn.dataset.count}`).remove();
    });

    colorContainer.appendChild(colorInput);
    colorContainer.appendChild(colorLabel);
    colorContainer.appendChild(colorInputText);
    colorContainer.appendChild(delBtn);

    return colorContainer;
  }

  function createSizeInput(count) {
    const sizeContainer = document.createElement("div");
    sizeContainer.setAttribute("id", `sizeContainer${count}`);
    sizeContainer.classList.add("choos-size-container");
    const sizeInputText = document.createElement("input");
    sizeInputText.setAttribute("type", "text");
    sizeInputText.setAttribute("placeholder", "사이즈입력");
    const delBtn = document.createElement("button");
    delBtn.dataset.count = count;
    delBtn.classList.add("add-size-option");
    delBtn.innerHTML = '<i class="fas fa-minus"></i>';

    delBtn.addEventListener("click", () => {
      document.getElementById(`sizeContainer${delBtn.dataset.count}`).remove();
    });

    sizeContainer.appendChild(sizeInputText);
    sizeContainer.appendChild(delBtn);

    return sizeContainer;
  }

  function detailImgUploadProcess(detailImgFile){
   
    const detailImgElem = document.createElement("img");
    detailImgElem.setAttribute(
      "src",
      window.URL.createObjectURL(detailImgFile[0])
    );
    detailImgElem.setAttribute("alt", "상세이미지");
    document.getElementById('appendDetailImgTag').setAttribute('src', window.URL.createObjectURL(detailImgFile[0]))
    const detailImgDeleteBtn = document.createElement("button");
    detailImgDeleteBtn.classList.add("detail-img-del-btn");
    detailImgDeleteBtn.innerHTML = `<i class="fas fa-minus"></i>`;
    document.getElementById("dialog").classList.add("after");
    
    document.getElementById("viewDetailImg").appendChild(detailImgElem);
    document.getElementById("viewDetailImg").appendChild(detailImgDeleteBtn);

    detailImgDeleteBtn.addEventListener('click',()=>{
      document.getElementById("dialog").classList.remove("after");
      detailImgElem.remove();
      detailImgDeleteBtn.remove();
    document.getElementById('appendDetailImgTag').setAttribute('src', '')

    })
  }

  let colorCount = 0;
  let sizeCount = 0;
  function colorOptionAdd() {
    colorOptionAppenElem.appendChild(createColorInput(colorCount++));
  }

  function sizeOptionAdd() {
    sizeOptionAppenElem.appendChild(createSizeInput(sizeCount++));
  }
  const _uploadProcess = uploadProcess();

  const dropzonElem = new CreateDragDrop(_uploadProcess);

  document.getElementById("uploaded-img-con").appendChild(dropzonElem);

  const colorAddBtn = document.getElementById("addColorOptionBtn");
  colorAddBtn.addEventListener("click", colorOptionAdd);
  const sizeAddBtn = document.getElementById("addSizeOptionBtn");
  sizeAddBtn.addEventListener("click", sizeOptionAdd);

  const detailImgBtn = document.getElementById("detailImgBtn");
  detailImgBtn.addEventListener("click", () => {
    document.body.classList.add("dialog-on");
  });

  const dialogCloseBtn = document.getElementById("dialogCloseBtn");
  dialogCloseBtn.addEventListener("click", () => {
    document.body.classList.remove("dialog-on");
  });

  const uploadDetailImgArea = document.getElementById("uploadDetailImgArea");
  uploadDetailImgArea.addEventListener("dragover", (e) => {
    e.stopPropagation();
    e.preventDefault();
    uploadDetailImgArea.style.backgroundColor = "#ddd";
  });
  uploadDetailImgArea.addEventListener("dragleave", (e) => {
    e.stopPropagation();
    e.preventDefault();
    uploadDetailImgArea.style.backgroundColor = "white";
  });
  uploadDetailImgArea.addEventListener("drop", (e) => {
    e.stopPropagation();
    e.preventDefault();
    uploadDetailImgArea.style.backgroundColor = "white";

    const detailImgFile = e.dataTransfer && e.dataTransfer.files;
console.log(detailImgFile);
    if (detailImgFile.length > 1) {
      alert("상세 이미지는 한개만 등록 가능합니다.");
      return;
    }

    detailImgUploadProcess(detailImgFile);
   
  });

  const detailImgUploadBtn = document.getElementById('detailImgUpload');
  detailImgUploadBtn.addEventListener('change',()=>{
    detailImgUploadProcess(detailImgUploadBtn.files);
  })
})();
