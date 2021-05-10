(() => {
  const supplyName = new CustomInput("supplyInfoGroup", "업체명");
  const supplyNumber = new CustomInput("supplyInfoGroup", "사업자등록번호");

  const addressInputMetaData = new CustomInputMetaData("true","","text","");

  const supplyAddress = new CustomInput("supplyInfoGroup", "주소", addressInputMetaData);
  const supplyDetailAddress = new CustomInput("supplyInfoGroup", "상세주소");

  const supplyTag = new CustomInput("supplyInfoGroup", "업체 스타일(태그)");

  supplyAddress.addEventListener('click',()=>{
    new daum.Postcode({
            oncomplete: function (data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
                // 예제를 참고하여 다양한 활용법을 확인해 보세요.
            }
        }).open();
  });
  
  const imgUploadArea = document.getElementById("supplyImgUpload");
  const dragAndDrop = new CreateDragDrop(test);
  imgUploadArea.appendChild(dragAndDrop);
})();
