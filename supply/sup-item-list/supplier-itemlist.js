(() => {
  const tableElem = document.getElementById("item-list-table");

  function clickHandler(e) {
    let elem = e.target;

    console.log(elem)

    if (elem.classList.contains("item-img-inTable")){
        console.log(elem.getAttribute("src"))
        window.open(`http://127.0.0.1:5500/4TH-Project/${elem.getAttribute("src")}`);

        return;
    }

    if (elem.nodeName === "INPUT") {
      if (elem.classList.contains("item-all-check")) {
        let checkBoxArr = document.getElementsByClassName("item-check");
        for (let i = 0; i < checkBoxArr.length; i++) {
          checkBoxArr[i].checked = elem.checked;
        }
      } else {
        alert(`${elem.parentNode.parentNode.dataset.itemidx} 행 체크 클릭`);
      }
      return;
    }

    while (!elem.classList.contains("item-row")) {
      elem = elem.parentNode;
      if (elem.nodeName === "TABLE") {
        elem = null;
        console.log("tabedfsdfsdf");
        return;
      }
    }

    alert(`${elem.dataset.itemidx} 행 클릭`);
  }

  tableElem.addEventListener("click", clickHandler);
})();
