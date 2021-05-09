const $btnshirt = document.getElementById('btnshirt');
const $btnpants = document.getElementById('btnpants');
const $btnskirt = document.getElementById('btnskirt');
const $btnonepice = document.getElementById('btnonepice');
const $btntwopice = document.getElementById('btntwopice');
const $btnjaket = document.getElementById('btnjaket');

const $shirt = document.getElementsByClassName('shirts');
const $pants = document.getElementsByClassName('pants');
const $skirt = document.getElementsByClassName('skirt');
const $onepice = document.getElementsByClassName('onepice');
const $twopice = document.getElementsByClassName('twopice');
const $jaket = document.getElementsByClassName('jaket');

$btnshirt.addEventListener("click",btnshirtClickEvent);
$btnpants.addEventListener("click",btnpantsClickEvent);
$btnskirt.addEventListener("click",btnskirtClickEvent);
$btnonepice.addEventListener("click",btnonepiceClickEvent);
$btntwopice.addEventListener("click",btntwopiceClickEvent);
$btnjaket.addEventListener("click",btnjaketClickEvent);

function btnshirtClickEvent (){
    DisplaynoneALL();
    for(let i=0; i<$shirt.length; i++){
        $shirt[i].style.display ="block";
    }
}

function btnpantsClickEvent(){
    DisplaynoneALL();
    for(let i=0; i<$pants.length; i++){
        $pants[i].style.display ="block";
    }
}
function btnskirtClickEvent(){
    DisplaynoneALL();
    for(let i=0; i<$skirt.length; i++){
        $skirt[i].style.display ="block";
    }
}
function btnonepiceClickEvent(){
    DisplaynoneALL();
    for(let i=0; i<$onepice.length; i++){
        $onepice[i].style.display ="block";
    }
}
function btntwopiceClickEvent(){
    DisplaynoneALL();
    for(let i=0; i<$twopice.length; i++){
        $twopice[i].style.display ="block";
    }
}
function btnjaketClickEvent(){
    DisplaynoneALL();
    for(let i=0; i<$jaket.length; i++){
        $jaket[i].style.display ="block";
    }
}

function DisplaynoneALL(){
    for(let i =0; i = $shirt.length; i++){
        $shirt[i].style.display = "none";
    }
    for(let i =0; i = $pants.length; i++){
        $pants[i].style.display = "none";
    }
    for(let i =0; i = $skirt.length; i++){
        $skirt[i].style.display = "none";
    }
    for(let i =0; i = $onepice.length; i++){
        $onepice[i].style.display = "none";
    }
    for(let i =0; i = $twopice.length; i++){
        $twopice[i].style.display = "none";
    }
    for(let i =0; i = $jaket.length; i++){
        $jaket[i].style.display = "none";
    }
}