'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

//     { title1 }: { title1: any},
//     {midtitle}:{midtitle: any}
// ) =>(
// <div>
//     <h1>{title1}</h1>
//     <h2>{title1}</h2>
//     <h3>{midtitle}</h3>
// </div>
// ) ;
// const demo=({midtitle1, title1})=>{

var demo = function demo(props) {
  var title1 = props.title1,
      midtitle1 = props.midtitle1;

  var _useState = React.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      close = _useState2[0],
      setClose = _useState2[1];

  return close ? /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("h1", null, title1, " "), /*#__PURE__*/React__default['default'].createElement("h1", null, title1, " "), /*#__PURE__*/React__default['default'].createElement("h2", null, midtitle1, " "), /*#__PURE__*/React__default['default'].createElement("span", {
    onClick: function onClick() {
      return setClose(false);
    }
  }, "\u70B9\u51FB\u6211\u5C31\u6D88\u5931\u4E86"))) : /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("h1", null, title1), /*#__PURE__*/React__default['default'].createElement("h2", null, midtitle1));
};

exports.Foo = demo;
