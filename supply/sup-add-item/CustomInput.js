function CustomInput(title){

    this.containerElem = document.createElement("div");
    this.containerElem.classList.add('info-input-group');

    this.inputElem = document.createElement('input');
    this.inputElem.setAttribute('type','text');
    this.inputElem.classList.add('info-input');

    this.inputEventHandler();

    this.labelElem = document.createElement('label');
    this.labelElem.innerText = title;

    this.containerElem.appendChild(this.inputElem);
    this.containerElem.appendChild(this.labelElem);


    document.getElementById('inputInfoArea').appendChild(this.containerElem);
}

CustomInput.prototype = {
    constructor:CustomInput,
    inputEventHandler:function(){
        this.inputElem.addEventListener("focus",()=>{
            this.labelElem.style.transform = 'translateY(-30px)';
        })
        
        this.inputElem.addEventListener("blur",()=>{
            if(this.inputElem.value !== ""){
                this.labelElem.style.transform = 'translateY(-30px)';
            }else {
                this.labelElem.style.transform = 'translateY(0px)';
            }
        })
    },
    getValue:function(){
        return this.inputElem.value;
    }
}