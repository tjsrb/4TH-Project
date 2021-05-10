let $Check = document.getElementsByClassName("itemCheck").checked; 
let $itemAllcheck = document.getElementById('itemAllcheck');
let $itemCheck = document.getElementsByClassName('itemCheck');

console.log($itemCheck);

function CheckboxHandler(){
    for(let i =0; i<$itemCheck.length; i++){
        if($Check == true){
            alert("12");
        }
    }
}