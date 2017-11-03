'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
      wife: '老婆/女票',
      sister: '姐妹/闺蜜',
      mum: '妈妈',
      person: '../image/person.jpg',
      like: '../image/礼物.png',
      finish: '../image/对号.png',
      camera: '../image/相机.png',
      ring: '../image/戒指.png',
      lipstick: '../image/口红.png',
      flower: '../image/鲜花.png',
      clothes: '../image/衣服.png',
      wallet: '../image/钱包.png',
      red: 'red',
      gray: 'gray',
      solidred: 'red',
      solidwhite: 'white'
    }, _this.methods = {
      she: function she() {
        var self = this;
        self.camera = '../image/相机.png';
        self.ring = '../image/戒指.png';
        self.lipstick = '../image/口红.png';
        self.flower = '../image/鲜花.png';
        self.clothes = '../image/衣服.png';
        self.wallet = '../image/钱包.png';
        self.wife = '老婆/女票';
        self.sister = '姐妹/闺蜜';
        self.mum = '妈妈';
        self.red = 'red';
        self.gray = 'gray';
        self.solidred = 'red';
        self.solidwhite = 'white';
      },
      he: function he() {
        var self = this;
        self.camera = '../image/相机.png';
        self.ring = '../image/戒指.png';
        self.lipstick = '../image/手表.png';
        self.flower = '../image/眼镜.png';
        self.clothes = '../image/衣服.png';
        self.wallet = '../image/钱包.png';
        self.wife = '老公/男票';
        self.sister = '兄弟/基友';
        self.mum = '爸爸';
        self.gray = 'red';
        self.red = 'gray';
        self.solidwhite = 'red';
        self.solidred = 'white';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/gift'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsIndpZmUiLCJzaXN0ZXIiLCJtdW0iLCJwZXJzb24iLCJsaWtlIiwiZmluaXNoIiwiY2FtZXJhIiwicmluZyIsImxpcHN0aWNrIiwiZmxvd2VyIiwiY2xvdGhlcyIsIndhbGxldCIsInJlZCIsImdyYXkiLCJzb2xpZHJlZCIsInNvbGlkd2hpdGUiLCJtZXRob2RzIiwic2hlIiwic2VsZiIsImhlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxZQUFNLE9BRkQ7QUFHTEMsY0FBUSxPQUhIO0FBSUxDLFdBQUssSUFKQTtBQUtMQyxjQUFRLHFCQUxIO0FBTUxDLFlBQU0saUJBTkQ7QUFPTEMsY0FBUSxpQkFQSDtBQVFMQyxjQUFRLGlCQVJIO0FBU0xDLFlBQU0saUJBVEQ7QUFVTEMsZ0JBQVUsaUJBVkw7QUFXTEMsY0FBUSxpQkFYSDtBQVlMQyxlQUFTLGlCQVpKO0FBYUxDLGNBQVEsaUJBYkg7QUFjTEMsV0FBSyxLQWRBO0FBZUxDLFlBQU0sTUFmRDtBQWdCTEMsZ0JBQVUsS0FoQkw7QUFpQkxDLGtCQUFZO0FBakJQLEssUUFtQlBDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNGO0FBQ0osWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtaLE1BQUwsR0FBYyxpQkFBZDtBQUNBWSxhQUFLWCxJQUFMLEdBQVksaUJBQVo7QUFDQVcsYUFBS1YsUUFBTCxHQUFnQixpQkFBaEI7QUFDQVUsYUFBS1QsTUFBTCxHQUFjLGlCQUFkO0FBQ0FTLGFBQUtSLE9BQUwsR0FBZSxpQkFBZjtBQUNBUSxhQUFLUCxNQUFMLEdBQWMsaUJBQWQ7QUFDQU8sYUFBS2xCLElBQUwsR0FBWSxPQUFaO0FBQ0FrQixhQUFLakIsTUFBTCxHQUFjLE9BQWQ7QUFDQWlCLGFBQUtoQixHQUFMLEdBQVcsSUFBWDtBQUNBZ0IsYUFBS04sR0FBTCxHQUFXLEtBQVg7QUFDQU0sYUFBS0wsSUFBTCxHQUFZLE1BQVo7QUFDQUssYUFBS0osUUFBTCxHQUFnQixLQUFoQjtBQUNBSSxhQUFLSCxVQUFMLEdBQWtCLE9BQWxCO0FBQ0QsT0FoQk87QUFpQlJJLFFBakJRLGdCQWlCSDtBQUNILFlBQUlELE9BQU8sSUFBWDtBQUNBQSxhQUFLWixNQUFMLEdBQWMsaUJBQWQ7QUFDQVksYUFBS1gsSUFBTCxHQUFZLGlCQUFaO0FBQ0FXLGFBQUtWLFFBQUwsR0FBZ0IsaUJBQWhCO0FBQ0FVLGFBQUtULE1BQUwsR0FBYyxpQkFBZDtBQUNBUyxhQUFLUixPQUFMLEdBQWUsaUJBQWY7QUFDQVEsYUFBS1AsTUFBTCxHQUFjLGlCQUFkO0FBQ0FPLGFBQUtsQixJQUFMLEdBQVksT0FBWjtBQUNBa0IsYUFBS2pCLE1BQUwsR0FBYyxPQUFkO0FBQ0FpQixhQUFLaEIsR0FBTCxHQUFXLElBQVg7QUFDQWdCLGFBQUtMLElBQUwsR0FBWSxLQUFaO0FBQ0FLLGFBQUtOLEdBQUwsR0FBVyxNQUFYO0FBQ0FNLGFBQUtILFVBQUwsR0FBa0IsS0FBbEI7QUFDQUcsYUFBS0osUUFBTCxHQUFnQixPQUFoQjtBQUNEO0FBaENPLEs7Ozs7OzZCQWtDRCxDQUFFOzs7O0VBekRzQixlQUFLTSxJOztrQkFBbkJ6QixLIiwiZmlsZSI6ImdpZnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn56S854mp6K+0J1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICB3aWZlOiAn6ICB5amGL+Wls+elqCcsXG4gICAgc2lzdGVyOiAn5aeQ5aa5L+mXuuicnCcsXG4gICAgbXVtOiAn5aaI5aaIJyxcbiAgICBwZXJzb246ICcuLi9pbWFnZS9wZXJzb24uanBnJyxcbiAgICBsaWtlOiAnLi4vaW1hZ2Uv56S854mpLnBuZycsXG4gICAgZmluaXNoOiAnLi4vaW1hZ2Uv5a+55Y+3LnBuZycsXG4gICAgY2FtZXJhOiAnLi4vaW1hZ2Uv55u45py6LnBuZycsXG4gICAgcmluZzogJy4uL2ltYWdlL+aIkuaMhy5wbmcnLFxuICAgIGxpcHN0aWNrOiAnLi4vaW1hZ2Uv5Y+j57qiLnBuZycsXG4gICAgZmxvd2VyOiAnLi4vaW1hZ2Uv6bKc6IqxLnBuZycsXG4gICAgY2xvdGhlczogJy4uL2ltYWdlL+iho+acjS5wbmcnLFxuICAgIHdhbGxldDogJy4uL2ltYWdlL+mSseWMhS5wbmcnLFxuICAgIHJlZDogJ3JlZCcsXG4gICAgZ3JheTogJ2dyYXknLFxuICAgIHNvbGlkcmVkOiAncmVkJyxcbiAgICBzb2xpZHdoaXRlOiAnd2hpdGUnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBzaGUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY2FtZXJhID0gJy4uL2ltYWdlL+ebuOacui5wbmcnXG4gICAgICBzZWxmLnJpbmcgPSAnLi4vaW1hZ2Uv5oiS5oyHLnBuZydcbiAgICAgIHNlbGYubGlwc3RpY2sgPSAnLi4vaW1hZ2Uv5Y+j57qiLnBuZydcbiAgICAgIHNlbGYuZmxvd2VyID0gJy4uL2ltYWdlL+mynOiKsS5wbmcnXG4gICAgICBzZWxmLmNsb3RoZXMgPSAnLi4vaW1hZ2Uv6KGj5pyNLnBuZydcbiAgICAgIHNlbGYud2FsbGV0ID0gJy4uL2ltYWdlL+mSseWMhS5wbmcnXG4gICAgICBzZWxmLndpZmUgPSAn6ICB5amGL+Wls+elqCdcbiAgICAgIHNlbGYuc2lzdGVyID0gJ+WnkOWmuS/pl7ronJwnXG4gICAgICBzZWxmLm11bSA9ICflpojlpognXG4gICAgICBzZWxmLnJlZCA9ICdyZWQnXG4gICAgICBzZWxmLmdyYXkgPSAnZ3JheSdcbiAgICAgIHNlbGYuc29saWRyZWQgPSAncmVkJ1xuICAgICAgc2VsZi5zb2xpZHdoaXRlID0gJ3doaXRlJ1xuICAgIH0sXG4gICAgaGUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY2FtZXJhID0gJy4uL2ltYWdlL+ebuOacui5wbmcnXG4gICAgICBzZWxmLnJpbmcgPSAnLi4vaW1hZ2Uv5oiS5oyHLnBuZydcbiAgICAgIHNlbGYubGlwc3RpY2sgPSAnLi4vaW1hZ2Uv5omL6KGoLnBuZydcbiAgICAgIHNlbGYuZmxvd2VyID0gJy4uL2ltYWdlL+ecvOmVnC5wbmcnXG4gICAgICBzZWxmLmNsb3RoZXMgPSAnLi4vaW1hZ2Uv6KGj5pyNLnBuZydcbiAgICAgIHNlbGYud2FsbGV0ID0gJy4uL2ltYWdlL+mSseWMhS5wbmcnXG4gICAgICBzZWxmLndpZmUgPSAn6ICB5YWsL+eUt+elqCdcbiAgICAgIHNlbGYuc2lzdGVyID0gJ+WFhOW8ny/ln7rlj4snXG4gICAgICBzZWxmLm11bSA9ICfniLjniLgnXG4gICAgICBzZWxmLmdyYXkgPSAncmVkJ1xuICAgICAgc2VsZi5yZWQgPSAnZ3JheSdcbiAgICAgIHNlbGYuc29saWR3aGl0ZSA9ICdyZWQnXG4gICAgICBzZWxmLnNvbGlkcmVkID0gJ3doaXRlJ1xuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7fVxufVxuIl19