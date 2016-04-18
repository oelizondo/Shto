"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shto = function () {
  function Shto(action, trigger, domElements) {
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
      } else {
        throw "sessionStorage is not enabled / supported.";
      }
      window.onload = this.returnData(this.domElements);
    }
  }, {
    key: "addValue",
    value: function addValue(element) {
      if (typeof element == "string") {
        this.domElements.push(element);
      } else {
        throw 'Not a valid element.';
      }
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
          var formField = document.getElementById(domElement);
          formField.value = window.sessionStorage.getItem(domElement);
        } else {
          throw "This element doesn't exist.";
        }
      });
    }
  }, {
    key: "resetForm",
    value: function resetForm(resetElement) {
      var _this2 = this;

      var resetButton = document.getElementById(resetElement);

      resetButton.addEventListener(this.action, function () {
        _this2.domElements.forEach(function (domElement) {
          var formField = document.getElementById(domElement);
          formField.value = "";
          window.sessionStorage.setItem(domElement, formField.value);
        });
      });
    }
  }]);

  return Shto;
}();