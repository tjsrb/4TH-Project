class AttributeInfo {
  key : string;
  value : string;
  
  /**
   * @param {string} key
   * @param {string} value 
   */
  constructor(key : string, value : string) {
      this.key = key;
      this.value = value;
  }
}

class CustomInput {
  eventList:Array<string> = [];

  private containerElem:HTMLElement = document.createElement('div');
  private inputElem:HTMLInputElement = document.createElement('input');
  private labelElem:HTMLElement = document.createElement('label');

  constructor(elementId:string, labelText:string, attributes:Array<AttributeInfo>){
      this.validationElementId(elementId);
      this.initialize(elementId, labelText, attributes);
  }

  private validationElementId = (elementId:string) =>{
      if(elementId == null || elementId == undefined){
          throw "invalid elementId please input elementId";
      }
  }

  private initialize = (elementId:string, labelText:string, attributes:Array<AttributeInfo>):void => {
      this.styling(this.defaultStyle);
      this.drawInputElement(elementId);
      this.drawLabelElement(labelText);
      this.initAttribute(attributes);
      this.initEventListener(); 
  }
  
  private styling = (cssStr:string):void => {
      let styleElem = document.createElement('style');
      styleElem.appendChild(document.createTextNode(cssStr));
      document.getElementsByTagName('body')[0].appendChild(styleElem);
      this.containerElem.classList.add('custom-input-container-elem');
  }

  private drawInputElement = (elementId:string):void => {
      this.appendChildToContainerElem();
      document.getElementById(elementId)?.appendChild(this.containerElem);
  }

  private appendChildToContainerElem = ():void => {
      this.containerElem.appendChild(this.inputElem);
      this.containerElem.appendChild(this.labelElem);
  }

  private drawLabelElement = (labelText : string):void => {
      if(labelText){
          this.labelElem.innerText = labelText;
      }
  }

  private initAttribute = (attributes:Array<AttributeInfo>):void => {
      if(attributes){
          attributes.map(attr => {
              this.inputElem.setAttribute(attr['key'],attr['value']);
          });
      }
  }

  private initEventListener = ():void => {
      this.inputElem.addEventListener("focus",()=>{
          this.labelElem.style.transform = 'translateY(-20px)';
          this.labelElem.style.fontSize = '14px';
      })
      this.inputElem.addEventListener("blur",()=>{
          if(this.inputElem.value !== ""){
              this.labelElem.style.transform = 'translateY(-20px)';
          this.labelElem.style.fontSize = '14px';

          }else {
              this.labelElem.style.transform = 'translateY(0px)';
          this.labelElem.style.fontSize = 'large';

          }
      })
  }

  public getValue = ():string|number|Array<string> => {
      return this.inputElem.value;
  }
  
  public getElement = ():HTMLInputElement => {
    return this.inputElem;
}
  public getLabelElement = ():HTMLElement => {
    return this.labelElem;
}

  public addEventListener = (type:string, lisenter:any):void =>{
      this.inputElem.addEventListener(type,lisenter);
      this.eventList.push(type);
  }

  public removeEventListener = (type:string):void => {
      
      this.inputElem.removeEventListener(type,()=>{
          let newEventList = this.eventList.filter((event)=>{
              return event !== type;
          });
          this.eventList = newEventList;
      });
  }

  private defaultStyle:string = `
  .custom-input-container-elem {
      position: relative;
      display: flex;
      margin-top:50px;
      width:100%;
    }
    
    .custom-input-container-elem label {
      transition: 0.2s;
      position: absolute;
      top: -8px;
      left: 0;
      font-size: large;
    }
    .custom-input-container-elem input {
      width:100%;
      font-size: large;
      outline: none;
      border-left: none;
      border-right: none;
      border-top: none;
    }
    
    .custom-input-container-elem input:focus{
      border-bottom: 2px solid orangered;
    }
  `;
}