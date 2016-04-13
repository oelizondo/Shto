"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shto = function () {
  function Shto(trigger, action, domElements) {
    _classCallCheck(this, Shto);

    this.action = action;
    this.trigger = trigger;
    this.domElements = domElements;
  }

  _createClass(Shto, [{
    key: "listen",
    value: function listen() {
      var _this = this;

      if (typeof window.sessionStorage != "undefined") {

        var trigger = document.getElementById(this.trigger);
        trigger.addEventListener(this.action, function () {
          _this.captureData(_this.domElements);
        });
        this.viewChangeListener();
      } else {

        throw "sessionStorage is not enabled / supported.";
      }
    }
  }, {
    key: "addValue",
    value: function addValue(element) {
      if (typeof element == "string") this.domElements.push(element);
      return true;
    }
  }, {
    key: "captureData",
    value: function captureData(domElements) {
      domElements.forEach(function (domElement) {
        if (domElement.value != "undefined") {

          window.sessionStorage.setItem(domElement, document.getElementById(domElement).value);
        } else {

          throw "This element doesn't exist.";
        }
      });
    }
  }, {
    key: "returnData",
    value: function returnData(domElements) {
      domElements.forEach(function (domElement) {
        if (domElement.value != "undefined") {

          document.getElementById(domElement.value(window.sessionStorage.getItem(domElement)));
        } else {

          throw "This element doesn't exist.";
        }
      });
    }
  }, {
    key: "viewChangeListener",
    value: function viewChangeListener() {
      if (document.getElementById('form').length) {
        this.returnData(this.domElements);
      }
    }
  }]);

  return Shto;
}();

var sess = new Shto('save', 'click', 'form', ['button1']);
sess.listen();