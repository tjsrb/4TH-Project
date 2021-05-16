const $storeName = document.getElementsByClassName("store-name-flex");
const $list = document.getElementsByClassName("list");
let j = 0;
paging ();
function paging (){
    for(let i = 0; i<$storeName.length; i++){
        j++; 
        console.log(j);
        $list.innerHTML(j);
    }
    
}
