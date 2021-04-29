(() => {
  const itemName = new CustomInput("상품명");
  const tags = new CustomInput("태그");
  const price = new CustomInput("가격");
  const test = new CustomInput("배송비");

  let uploadFileArr = new Array();

  const dragAndDropElem = document.getElementById("dragAndDrop");

  const directlyUploadBtn = document.getElementById('directlyUploadBtn');

  directlyUploadBtn.addEventListener('change',()=>{
    for(let i =0;i<directlyUploadBtn.files.length;i++){
        const file = directlyUploadBtn.files[i];
        const UUID = uuidv4();
        uploadFileArr.push({
            file : file,
            id : UUID
        });
        const image = window.URL.createObjectURL(file);
        const imageTag = document.createElement('img');
        imageTag.setAttribute('id', UUID);
        imageTag.setAttribute('src',image);
        imageTag.addEventListener('click',function(e){
            for(var i =0;i<uploadFileArr.length;i++){
                if(uploadFileArr[i]['id'] === e.target.id){
                    uploadFileArr.splice(i, 1);
                    return;
                }
            }
        })
        document.getElementsByClassName('main-img')[0].appendChild(imageTag);
    }

    function uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
  })

  dragAndDropElem.addEventListener("dragleave", (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("떠남");
    dragAndDropElem.style.backgroundColor = "rgb(255, 227, 211)";
    dragAndDropElem.style.outlineOffset = "-10px";
});

dragAndDropElem.addEventListener("dragover", (e) => {
    e.stopPropagation();
    e.preventDefault();
    dragAndDropElem.style.backgroundColor = "#FFA873";
    dragAndDropElem.style.outlineOffset = "-20px";
  });

  dragAndDropElem.addEventListener("drop", (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("떨굼");

    var files = e.dataTransfer && e.dataTransfer.files;
    console.log(files)
    
    uploadFileArr.push(files);

  });
})();
