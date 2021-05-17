(() => {
  const supplyName = new CustomInput("supplyInfoInputGroup", "업체명");
  const supplyNumber = new CustomInput("supplyInfoInputGroup", "사업자등록번호");

  const supplyAddress = new CustomInput("supplyInfoInputGroup", "주소(주소검색)");
  // const supplyAddress = new CustomInput("supplyInfoInputGroup", "주소", [
  //   new AttributeInfo("readonly", "true"),
  // ]);

  const supplyDetailAddress = new CustomInput("supplyInfoInputGroup", "상세주소");


  supplyDetailAddressInputElem = supplyDetailAddress.getElement();

  supplyAddress.addEventListener("focus", () => {
    new daum.Postcode({
      oncomplete: function (data) {
        // console.log(data.address);
        supplyAddress.getElement().value = data.address;
        supplyAddress.getLabelElement().style.transform = 'translateY(-20px)';
        supplyAddress.getLabelElement().style.fontSize = '14px';
      }
    }).open();
    supplyDetailAddressInputElem.focus();
    // supplyDetailAddressInputElem.focus();
  });

  // const imgUploadArea = document.getElementById("supplyImgUpload");
  // const dragAndDrop = new CreateDragDrop(test);
  // imgUploadArea.appendChild(dragAndDrop);
})();
