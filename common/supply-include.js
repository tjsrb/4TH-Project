const includePage = ["head", "sup-header", "footer"];
includePage.map((val) => {
  bindPage(val);
});
function bindPage(id) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (id === "sup-header") {
        document.getElementsByTagName(
          "header"
        )[0].innerHTML = this.responseText;
      } else {
        document.getElementsByTagName(id)[0].innerHTML = this.responseText;
      }
    }
  };
  console.log();
  xhttp.open(
    "GET",
    "http://127.0.0.1:5501/common/" + id + "/" + id + ".html",
    true
  );
  xhttp.send();
}
