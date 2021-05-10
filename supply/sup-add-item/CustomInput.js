class CustomInputMetaData {
    datas = [];

    readOnly = Object.freeze([
        "true","false"
    ]);

    validationReadOnly = (readOnly) => {
        if(!this.readOnly.includes(readOnly)){
            throw "invalid readOnly";
        }
    }
    /**
     * @param {string} readOnly 항목에 대한 고유 식별자 
     * @param {string} placeHolder 항목 아이콘 
     * @param {string} type 항목 타이틀
     * @param {function} value 실행에 대한 호출 함수
     */
    constructor(readOnly, placeHolder, type, value) {
        this.validationReadOnly(readOnly);
        this.datas.push({
            'readOnly':readOnly
        });
        this.datas.push({
            'placeHolder':placeHolder
        });
        this.datas.push({
            'value':value
        });
        this.datas.push({
            'type':type
        });
    }
}

function CustomInput(id,title,metaData){
    this.events = [];
    this.containerElem = document.createElement("div");
    this.containerElem.classList.add('info-input-group');

    this.inputElem = document.createElement('input');
    this.inputElem.setAttribute('type','text');
    this.inputElem.classList.add('info-input');

    if(existMetaData(metaData)){
        metaData.datas.map((metadata)=>{
            this.inputElem.setAttribute(Object.keys(metadata),metadata[Object.keys(metadata)]);

        });
    }

    this.inputEventHandler();

    this.labelElem = document.createElement('label');
    this.labelElem.innerText = title;

    this.containerElem.appendChild(this.inputElem);
    this.containerElem.appendChild(this.labelElem);

    document.getElementById(id).appendChild(this.containerElem);

    function existMetaData(metaData){
        return metaData != undefined && metaData != null;
    }
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
    },
    getElem:function(){
        return this.inputElem;
    },
    addEventListener:function(type, lisenter){
        this.inputElem.addEventListener(type,lisenter);
        this.events.push({
            type : lisenter
        });
    },
    removeEventListener:function(type){
        this.removeEventListener(type);
    }
}