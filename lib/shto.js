'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shto = function () {
  function Shto(trigger, action) {
    _classCallCheck(this, Shto);

    this.trigger = trigger;
    this.action = action;
  }

  _createClass(Shto, [{
    key: 'listen',
    value: function listen() {
      if (typeof window.sessionStorage == 'undefined') {
        throw 'sessionStorage is not enabled / supported';
      } else {
        console.log('listening');
      }
    }
  }]);

  return Shto;
}();