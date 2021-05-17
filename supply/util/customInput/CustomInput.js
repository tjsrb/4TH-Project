"use strict";
var AttributeInfo = /** @class */ (function () {
    /**
     * @param {string} key
     * @param {string} value
     */
    function AttributeInfo(key, value) {
        this.key = key;
        this.value = value;
    }
    return AttributeInfo;
}());
var CustomInput = /** @class */ (function () {
    function CustomInput(elementId, labelText, attributes) {
        var _this = this;
        this.eventList = [];
        this.containerElem = document.createElement('div');
        this.inputElem = document.createElement('input');
        this.labelElem = document.createElement('label');
        this.validationElementId = function (elementId) {
            if (elementId == null || elementId == undefined) {
                throw "invalid elementId please input elementId";
            }
        };
        this.initialize = function (elementId, labelText, attributes) {
            _this.styling(_this.defaultStyle);
            _this.drawInputElement(elementId);
            _this.drawLabelElement(labelText);
            _this.initAttribute(attributes);
            _this.initEventListener();
        };
        this.styling = function (cssStr) {
            var styleElem = document.createElement('style');
            styleElem.appendChild(document.createTextNode(cssStr));
            document.getElementsByTagName('body')[0].appendChild(styleElem);
            _this.containerElem.classList.add('custom-input-container-elem');
        };
        this.drawInputElement = function (elementId) {
            var _a;
            _this.appendChildToContainerElem();
            (_a = document.getElementById(elementId)) === null || _a === void 0 ? void 0 : _a.appendChild(_this.containerElem);
        };
        this.appendChildToContainerElem = function () {
            _this.containerElem.appendChild(_this.inputElem);
            _this.containerElem.appendChild(_this.labelElem);
        };
        this.drawLabelElement = function (labelText) {
            if (labelText) {
                _this.labelElem.innerText = labelText;
            }
        };
        this.initAttribute = function (attributes) {
            if (attributes) {
                attributes.map(function (attr) {
                    _this.inputElem.setAttribute(attr['key'], attr['value']);
                });
            }
        };
        this.initEventListener = function () {
            _this.inputElem.addEventListener("focus", function () {
                _this.labelElem.style.transform = 'translateY(-20px)';
                _this.labelElem.style.fontSize = '14px';
            });
            _this.inputElem.addEventListener("blur", function () {
                if (_this.inputElem.value !== "") {
                    _this.labelElem.style.transform = 'translateY(-20px)';
                    _this.labelElem.style.fontSize = '14px';
                }
                else {
                    _this.labelElem.style.transform = 'translateY(0px)';
                    _this.labelElem.style.fontSize = 'large';
                }
            });
        };
        this.getValue = function () {
            return _this.inputElem.value;
        };
        this.getElement = function () {
            return _this.inputElem;
        };
        this.getLabelElement = function () {
            return _this.labelElem;
        };
        this.addEventListener = function (type, lisenter) {
            _this.inputElem.addEventListener(type, lisenter);
            _this.eventList.push(type);
        };
        this.removeEventListener = function (type) {
            _this.inputElem.removeEventListener(type, function () {
                var newEventList = _this.eventList.filter(function (event) {
                    return event !== type;
                });
                _this.eventList = newEventList;
            });
        };
        this.defaultStyle = "\n  .custom-input-container-elem {\n      position: relative;\n      display: flex;\n      margin-top:50px;\n      width:100%;\n    }\n    \n    .custom-input-container-elem label {\n      transition: 0.2s;\n      position: absolute;\n      top: -8px;\n      left: 0;\n      font-size: large;\n    }\n    .custom-input-container-elem input {\n      width:100%;\n      font-size: large;\n      outline: none;\n      border-left: none;\n      border-right: none;\n      border-top: none;\n    }\n    \n    .custom-input-container-elem input:focus{\n      border-bottom: 2px solid orangered;\n    }\n  ";
        this.validationElementId(elementId);
        this.initialize(elementId, labelText, attributes);
    }
    return CustomInput;
}());
