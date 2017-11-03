'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '礼物说'
    }, _this.data = {
      src: '',
      person: '../image/个人.jpg',
      like: '../image/礼物.png',
      finish: '../image/对号.png',
      camera: '../image/相机.png',
      ring: '../image/戒指 1.png',
      lipstick: '../image/口红.png',
      flower: '../image/鲜花.png',
      clothes: '../image/衣服.png',
      wallet: '../image/钱包.png'

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/chat'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsInBlcnNvbiIsImxpa2UiLCJmaW5pc2giLCJjYW1lcmEiLCJyaW5nIiwibGlwc3RpY2siLCJmbG93ZXIiLCJjbG90aGVzIiwid2FsbGV0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsY0FBUSxpQkFGSDtBQUdMQyxZQUFNLGlCQUhEO0FBSUxDLGNBQVEsaUJBSkg7QUFLTEMsY0FBUSxpQkFMSDtBQU1MQyxZQUFNLG1CQU5EO0FBT0xDLGdCQUFVLGlCQVBMO0FBUUxDLGNBQVEsaUJBUkg7QUFTTEMsZUFBUyxpQkFUSjtBQVVMQyxjQUFROztBQVZILEs7Ozs7RUFKMEIsZUFBS0MsSTs7a0JBQW5CZCxLIiwiZmlsZSI6ImNoYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn56S854mp6K+0J1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBwZXJzb246ICcuLi9pbWFnZS/kuKrkurouanBnJyxcbiAgICBsaWtlOiAnLi4vaW1hZ2Uv56S854mpLnBuZycsXG4gICAgZmluaXNoOiAnLi4vaW1hZ2Uv5a+55Y+3LnBuZycsXG4gICAgY2FtZXJhOiAnLi4vaW1hZ2Uv55u45py6LnBuZycsXG4gICAgcmluZzogJy4uL2ltYWdlL+aIkuaMhyAxLnBuZycsXG4gICAgbGlwc3RpY2s6ICcuLi9pbWFnZS/lj6PnuqIucG5nJyxcbiAgICBmbG93ZXI6ICcuLi9pbWFnZS/pspzoirEucG5nJyxcbiAgICBjbG90aGVzOiAnLi4vaW1hZ2Uv6KGj5pyNLnBuZycsXG4gICAgd2FsbGV0OiAnLi4vaW1hZ2Uv6ZKx5YyFLnBuZydcblxuICB9XG59XG4iXX0=