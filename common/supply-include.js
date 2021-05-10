const includePage = ["head", "sup-header", "footer"];
includePage.map((val) => {
  bindPage(val);
});
let clientOffsetY = 0;
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
      history.scrollRestoration = "manual";

      window.addEventListener("scroll", () => {
        setTimeout(() => {
          clientOffsetY = window.pageYOffset;
        }, 00);
        if(clientOffsetY < window.pageYOffset){
          document.getElementById('scrollSupHeader').style.height = '0';
        }else {
          
          document.getElementById('scrollSupHeader').style.height = 'var(--header-height)';
        }
        console.log(window.pageYOffset + `---------` + clientOffsetY);
        // if(clientOffsetY)
        // document.getElementById('scrollSupHeader');
      });
    }
  };
  xhttp.open(
    "GET",
    "http://127.0.0.1:5501/common/" + id + "/" + id + ".html",
    true
  );
  xhttp.send();
}
