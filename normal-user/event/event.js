const $btnIng = document.getElementById("btnIng");
const $btnOver = document.getElementById("btnOver");
const $Ingevent = document.getElementById("ingEventPage");
const $Overevent = document.getElementById("OverEventPage");
$btnIng.addEventListener("click",ShowEvent); 
$btnOver.addEventListener("click",hiddenEvent);
function hiddenEvent(){
    $Ingevent.classList.add("hidden");
    $Overevent.classList.remove("hidden");
}
function ShowEvent(){
    $Ingevent.classList.remove("hidden");
    $Overevent.classList.add("hidden");
}