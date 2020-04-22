"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FormOne = function FormOne() {
  return (
    /*#__PURE__*/
    //name, email, and password for account creation
    React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Form One"), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", null, "Name:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: ""
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Email:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: ""
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Password:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: ""
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Submit"
    })))
  );
};

var FormTwo = function FormTwo() {
  return (
    /*#__PURE__*/
    //ship to address (line 1, line 2, city, state, zip code) and phone number
    React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Form Two"), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("h5", null, "Ship to address:"), /*#__PURE__*/React.createElement("label", null, "line 1:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: ""
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "line 2:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: ""
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "City:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: ""
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "State:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: ""
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Zipcode:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: ""
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Phone number:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: ""
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Submit"
    })))
  );
};

var FormThree = function FormThree() {
  return (
    /*#__PURE__*/
    //credit card #, expiry date, CVV, and billing zip code
    React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Form Three"), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", null, "Credit Card Number:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: ""
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Expiry date:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: ""
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "CVV:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: ""
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Billing zip code:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: ""
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Submit"
    })))
  );
};

var HomePage = function HomePage(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.handleClick
  }, "Checkout"));
};

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this);
    _this.state = {
      currentForm: 'FormThree',
      data: 0
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "handleClick",
    value: function handleClick() {
      console.log('SAY WHAT AGAIN.  SAY IT I DARE YOU I DOUBLE DOG DARE YOU. no bind needed.');
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.currentForm === 'HomePage') {
        return /*#__PURE__*/React.createElement(HomePage, {
          handleClick: this.handleClick
        });
      } else if (this.state.currentForm === 'FormOne') {
        return /*#__PURE__*/React.createElement(FormOne, null);
      } else if (this.state.currentForm === 'FormTwo') {
        return /*#__PURE__*/React.createElement(FormTwo, null);
      } else if (this.state.currentForm === 'FormThree') {
        return /*#__PURE__*/React.createElement(FormThree, null);
      }
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));