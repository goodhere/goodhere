"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactInstantsearchCore = require("react-instantsearch-core");

var _utils = require("../core/utils");

var cx = (0, _utils.createClassNames)('Stats');

var Stats =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Stats, _Component);

  function Stats() {
    (0, _classCallCheck2.default)(this, Stats);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Stats).apply(this, arguments));
  }

  (0, _createClass2.default)(Stats, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          translate = _this$props.translate,
          nbHits = _this$props.nbHits,
          processingTimeMS = _this$props.processingTimeMS,
          className = _this$props.className;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)(cx(''), className)
      }, _react.default.createElement("span", {
        className: cx('text')
      }, translate('stats', nbHits, processingTimeMS)));
    }
  }]);
  return Stats;
}(_react.Component);

(0, _defineProperty2.default)(Stats, "propTypes", {
  translate: _propTypes.default.func.isRequired,
  nbHits: _propTypes.default.number.isRequired,
  processingTimeMS: _propTypes.default.number.isRequired,
  className: _propTypes.default.string
});
(0, _defineProperty2.default)(Stats, "defaultProps", {
  className: ''
});

var _default = (0, _reactInstantsearchCore.translatable)({
  stats: function stats(n, ms) {
    return "".concat(n.toLocaleString(), " results found in ").concat(ms.toLocaleString(), "ms");
  }
})(Stats);

exports.default = _default;