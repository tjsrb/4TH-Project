(() => {
  const itemName = new CustomInput("inputInfoArea", "상품명");
  const tags = new CustomInput("inputInfoArea", "태그");
  const price = new CustomInput("inputInfoArea", "가격");
  const test = new CustomInput("inputInfoArea", "배송비");


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
          // dropzonElem.style.fontSize = "12px";
          // dropzonElem.style.outline = "2px dashed var(--main-orange);";
          imgContainerElem.appendChild(dropzonElem);
        }
      },
    };
  }

  const _uploadProcess = uploadProcess();

  const dropzonElem = new CreateDragDrop(_uploadProcess);

  document.getElementById("uploaded-img-con").appendChild(dropzonElem);
})();
