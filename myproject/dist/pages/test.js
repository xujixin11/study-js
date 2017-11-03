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

var date = new Date();
var years = [];
var months = [];
var days = [];

for (var i = 1990; i <= date.getFullYear(); i++) {
  years.push(i);
}
for (var _i = 1; _i <= 12; _i++) {
  months.push(_i);
}
for (var _i2 = 1; _i2 <= 31; _i2++) {
  days.push(_i2);
}

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
      navigationBarTitleText: '自我介绍'
    }, _this.data = {
      age: 20,
      items: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: 'true' }, { name: 'BRA', value: '巴西' }, { name: 'JPN', value: '日本' }, { name: 'ENG', value: '英国' }, { name: 'TUR', value: '法国' }],
      years: years,
      year: date.getFullYear(),
      months: months,
      month: 10,
      days: days,
      day: 9,
      value: [9999, 1, 1],

      multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
      objectMultiArray: [[{
        id: 0,
        name: '无脊柱动物'
      }, {
        id: 1,
        name: '脊柱动物'
      }], [{
        id: 0,
        name: '扁性动物'
      }, {
        id: 1,
        name: '线形动物'
      }, {
        id: 2,
        name: '环节动物'
      }, {
        id: 3,
        name: '软体动物'
      }, {
        id: 3,
        name: '节肢动物'
      }], [{
        id: 0,
        name: '猪肉绦虫'
      }, {
        id: 1,
        name: '吸血虫'
      }]],
      multiIndex: [0, 0, 0],

      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onTap',
    value: function onTap() {
      var self = this;
      self.age++;
    }
  }, {
    key: 'formSubmit',
    value: function formSubmit(e) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value);
    }
  }, {
    key: 'formReset',
    value: function formReset() {
      console.log('form发生了reset事件');
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'bindButtonTap',
    value: function bindButtonTap() {
      var self = this;
      _wepy2.default.chooseVideo({
        sourceType: ['album', 'camera'],
        maxDuration: 60,
        camera: 'back',
        success: function success(res) {
          self.setData({
            src: res.tempFilePath
          });
        }
      });
    }
  }, {
    key: 'bindButton',
    value: function bindButton() {
      var self = this;
      _wepy2.default.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function success(res) {
          self.setData({
            src: res.tempFilePaths
          });
        }
      });
    }
  }, {
    key: 'bindChange',
    value: function bindChange(e) {
      console.log(e.detail.value);
      var val = e.detail.value;
      var self = this;
      self.year = self.years[val[0]];
      self.month = self.months[val[1]];
      self.day = self.days[val[2]];
    }
  }, {
    key: 'bindMultiPickerChange',
    value: function bindMultiPickerChange(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value);
      this.setData({
        multiIndex: e.detail.value
      });
    }
  }, {
    key: 'bindMultiPickerColumnChange',
    value: function bindMultiPickerColumnChange(e) {
      console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
      var data = {
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex
      };
      data.multiIndex[e.detail.column] = e.detail.value;
      switch (e.detail.column) {
        case 0:
          switch (data.multiIndex[0]) {
            case 0:
              data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
              data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
              break;
            case 1:
              data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
              data.multiArray[2] = ['鲫鱼', '带鱼'];
              break;
          }
          data.multiIndex[1] = 0;
          data.multiIndex[2] = 0;
          break;
        case 1:
          switch (data.multiIndex[0]) {
            case 0:
              switch (data.multiIndex[1]) {
                case 0:
                  data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                  break;
                case 1:
                  data.multiArray[2] = ['蛔虫'];
                  break;
                case 2:
                  data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                  break;
                case 3:
                  data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                  break;
                case 4:
                  data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                  break;
              }
              break;
            case 1:
              switch (data.multiIndex[1]) {
                case 0:
                  data.multiArray[2] = ['鲫鱼', '带鱼'];
                  break;
                case 1:
                  data.multiArray[2] = ['青蛙', '娃娃鱼'];
                  break;
                case 2:
                  data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                  break;
              }
              break;
          }
          data.multiIndex[2] = 0;
          console.log(data.multiIndex);
          break;
      }
      this.setData(data);
    }
  }, {
    key: 'onReady',
    value: function onReady(e) {
      this.audioCtx = _wepy2.default.createAudioContext('myAudio');
    }
  }, {
    key: 'audioPlay',
    value: function audioPlay() {
      this.audioCtx.play();
    }
  }, {
    key: 'audioPause',
    value: function audioPause() {
      this.audioCtx.pause();
    }
  }, {
    key: 'audio14',
    value: function audio14() {
      this.audioCtx.seek(14);
    }
  }, {
    key: 'audioStart',
    value: function audioStart() {
      this.audioCtx.seek(0);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/test'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiZGF0ZSIsIkRhdGUiLCJ5ZWFycyIsIm1vbnRocyIsImRheXMiLCJpIiwiZ2V0RnVsbFllYXIiLCJwdXNoIiwiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImFnZSIsIml0ZW1zIiwibmFtZSIsInZhbHVlIiwiY2hlY2tlZCIsInllYXIiLCJtb250aCIsImRheSIsIm11bHRpQXJyYXkiLCJvYmplY3RNdWx0aUFycmF5IiwiaWQiLCJtdWx0aUluZGV4IiwicG9zdGVyIiwiYXV0aG9yIiwic3JjIiwic2VsZiIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwiY2hvb3NlVmlkZW8iLCJzb3VyY2VUeXBlIiwibWF4RHVyYXRpb24iLCJjYW1lcmEiLCJzdWNjZXNzIiwicmVzIiwic2V0RGF0YSIsInRlbXBGaWxlUGF0aCIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInRlbXBGaWxlUGF0aHMiLCJ2YWwiLCJjb2x1bW4iLCJhdWRpb0N0eCIsImNyZWF0ZUF1ZGlvQ29udGV4dCIsInBsYXkiLCJwYXVzZSIsInNlZWsiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsT0FBTyxJQUFJQyxJQUFKLEVBQWI7QUFDQSxJQUFNQyxRQUFRLEVBQWQ7QUFDQSxJQUFNQyxTQUFTLEVBQWY7QUFDQSxJQUFNQyxPQUFPLEVBQWI7O0FBRUEsS0FBSyxJQUFJQyxJQUFJLElBQWIsRUFBbUJBLEtBQUtMLEtBQUtNLFdBQUwsRUFBeEIsRUFBNENELEdBQTVDLEVBQWlEO0FBQy9DSCxRQUFNSyxJQUFOLENBQVdGLENBQVg7QUFDRDtBQUNELEtBQUssSUFBSUEsS0FBSSxDQUFiLEVBQWdCQSxNQUFLLEVBQXJCLEVBQXlCQSxJQUF6QixFQUE4QjtBQUM1QkYsU0FBT0ksSUFBUCxDQUFZRixFQUFaO0FBQ0Q7QUFDRCxLQUFLLElBQUlBLE1B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Q0FBY0ksSUFBZCxDQUFtQixDQUFuQjtBQUNEOzs7O0VBMU00QixlQUFLQyxJOztrQkFBbkIzQyxLIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgeWVhcnMgPSBbXVxuICAgIGNvbnN0IG1vbnRocyA9IFtdXG4gICAgY29uc3QgZGF5cyA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMTk5MDsgaSA8PSBkYXRlLmdldEZ1bGxZZWFyKCk7IGkrKykge1xuICAgICAgeWVhcnMucHVzaChpKVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMjsgaSsrKSB7XG4gICAgICBtb250aHMucHVzaChpKVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzMTsgaSsrKSB7XG4gICAgICBkYXlzLnB1c2goaSlcbiAgICB9XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iHquaIkeS7i+e7jSdcbiAgICAgIH1cbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIGFnZTogMjAsXG4gICAgICAgIGl0ZW1zOiBbXG5cbiAgICAgICAgICB7bmFtZTogJ1VTQScsIHZhbHVlOiAn576O5Zu9J30sXG4gICAgICAgICAge25hbWU6ICdDSE4nLCB2YWx1ZTogJ+S4reWbvScsIGNoZWNrZWQ6ICd0cnVlJ30sXG4gICAgICAgICAge25hbWU6ICdCUkEnLCB2YWx1ZTogJ+W3tOilvyd9LFxuICAgICAgICAgIHtuYW1lOiAnSlBOJywgdmFsdWU6ICfml6XmnKwnfSxcbiAgICAgICAgICB7bmFtZTogJ0VORycsIHZhbHVlOiAn6Iux5Zu9J30sXG4gICAgICAgICAge25hbWU6ICdUVVInLCB2YWx1ZTogJ+azleWbvSd9XG4gICAgICAgIF0sXG4gICAgICAgIHllYXJzOiB5ZWFycyxcbiAgICAgICAgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBtb250aHM6IG1vbnRocyxcbiAgICAgICAgbW9udGg6IDEwLFxuICAgICAgICBkYXlzOiBkYXlzLFxuICAgICAgICBkYXk6IDksXG4gICAgICAgIHZhbHVlOiBbOTk5OSwgMSwgMV0sXG5cbiAgICAgICAgbXVsdGlBcnJheTogW1sn5peg6ISK5p+x5Yqo54mpJywgJ+iEiuafseWKqOeJqSddLCBbJ+aJgeaAp+WKqOeJqScsICfnur/lvaLliqjniaknLCAn546v6IqC5Yqo54mpJywgJ+i9r+S9k+WKqOeJqScsICfoioLogqLliqjniaknXSwgWyfnjKrogonnu6bomasnLCAn5ZC46KGA6JmrJ11dLFxuICAgICAgICBvYmplY3RNdWx0aUFycmF5OiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgbmFtZTogJ+aXoOiEiuafseWKqOeJqSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICBuYW1lOiAn6ISK5p+x5Yqo54mpJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgIG5hbWU6ICfmiYHmgKfliqjniaknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgbmFtZTogJ+e6v+W9ouWKqOeJqSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICBuYW1lOiAn546v6IqC5Yqo54mpJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgIG5hbWU6ICfova/kvZPliqjniaknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgbmFtZTogJ+iKguiCouWKqOeJqSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLCBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICBuYW1lOiAn54yq6IKJ57um6JmrJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgIG5hbWU6ICflkLjooYDomasnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBtdWx0aUluZGV4OiBbMCwgMCwgMF0sXG5cbiAgICAgICAgcG9zdGVyOiAnaHR0cDovL3kuZ3RpbWcuY24vbXVzaWMvcGhvdG9fbmV3L1QwMDJSMzAweDMwME0wMDAwMDNyc0tGNDRHeWFTay5qcGc/bWF4X2FnZT0yNTkyMDAwJyxcbiAgICAgICAgbmFtZTogJ+atpOaXtuatpOWIuycsXG4gICAgICAgIGF1dGhvcjogJ+iuuOW3jScsXG4gICAgICAgIHNyYzogJ2h0dHA6Ly93cy5zdHJlYW0ucXFtdXNpYy5xcS5jb20vTTUwMDAwMVZmdnNKMjF4RnFiLm1wMz9ndWlkPWZmZmZmZmZmODJkZWY0YWY0YjEyYjNjZDkzMzdkNWU3JnVpbj0zNDY4OTcyMjAmdmtleT02MjkyRjUxRTFFMzg0RTA2RENCREM5QUI3QzQ5RkQ3MTNENjMyRDMxM0FDNDg1OEJBQ0I4REREMjkwNjdEM0M2MDE0ODFEMzZFNjIwNTNCRjhERkVBRjc0QzBBNUNDRkFERDY0NzExNjBDQUYzRTZBJmZyb210YWc9NDYnXG4gICAgICB9XG4gICAgICBvblRhcCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHNlbGYuYWdlKytcbiAgICAgIH1cbiAgICAgIGZvcm1TdWJtaXQoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnN1Ym1pdOS6i+S7tu+8jOaQuuW4puaVsOaNruS4uu+8micsIGUuZGV0YWlsLnZhbHVlKVxuICAgICAgfVxuICAgICAgZm9ybVJlc2V0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnJlc2V05LqL5Lu2JylcbiAgICAgIH1cbiAgICAgIG9uTG9hZCgpIHt9XG4gICAgICBiaW5kQnV0dG9uVGFwKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgd2VweS5jaG9vc2VWaWRlbyh7XG4gICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcbiAgICAgICAgICBtYXhEdXJhdGlvbjogNjAsXG4gICAgICAgICAgY2FtZXJhOiAnYmFjaycsXG4gICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICAgIHNyYzogcmVzLnRlbXBGaWxlUGF0aFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBiaW5kQnV0dG9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgY291bnQ6IDEsXG4gICAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxuICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG4gICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICAgIHNyYzogcmVzLnRlbXBGaWxlUGF0aHNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgYmluZENoYW5nZShlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKVxuICAgICAgICBjb25zdCB2YWwgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgc2VsZi55ZWFyID0gc2VsZi55ZWFyc1t2YWxbMF1dXG4gICAgICAgIHNlbGYubW9udGggPSBzZWxmLm1vbnRoc1t2YWxbMV1dXG4gICAgICAgIHNlbGYuZGF5ID0gc2VsZi5kYXlzW3ZhbFsyXV1cbiAgICAgIH1cblxuICAgICAgYmluZE11bHRpUGlja2VyQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkemAgemAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIG11bHRpSW5kZXg6IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBiaW5kTXVsdGlQaWNrZXJDb2x1bW5DaGFuZ2UoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygn5L+u5pS555qE5YiX5Li6JywgZS5kZXRhaWwuY29sdW1uLCAn77yM5YC85Li6JywgZS5kZXRhaWwudmFsdWUpXG4gICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgIG11bHRpQXJyYXk6IHRoaXMuZGF0YS5tdWx0aUFycmF5LFxuICAgICAgICAgIG11bHRpSW5kZXg6IHRoaXMuZGF0YS5tdWx0aUluZGV4XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5tdWx0aUluZGV4W2UuZGV0YWlsLmNvbHVtbl0gPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICBzd2l0Y2ggKGUuZGV0YWlsLmNvbHVtbikge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHN3aXRjaCAoZGF0YS5tdWx0aUluZGV4WzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBkYXRhLm11bHRpQXJyYXlbMV0gPSBbJ+aJgeaAp+WKqOeJqScsICfnur/lvaLliqjniaknLCAn546v6IqC5Yqo54mpJywgJ+i9r+S9k+WKqOeJqScsICfoioLogqLliqjniaknXVxuICAgICAgICAgICAgICAgIGRhdGEubXVsdGlBcnJheVsyXSA9IFsn54yq6IKJ57um6JmrJywgJ+WQuOihgOiZqyddXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGRhdGEubXVsdGlBcnJheVsxXSA9IFsn6bG8JywgJ+S4pOagluWKqOeJqScsICfniKzooYzliqjniaknXVxuICAgICAgICAgICAgICAgIGRhdGEubXVsdGlBcnJheVsyXSA9IFsn6bKr6bG8JywgJ+W4pumxvCddXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEubXVsdGlJbmRleFsxXSA9IDBcbiAgICAgICAgICAgIGRhdGEubXVsdGlJbmRleFsyXSA9IDBcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgc3dpdGNoIChkYXRhLm11bHRpSW5kZXhbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZGF0YS5tdWx0aUluZGV4WzFdKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGRhdGEubXVsdGlBcnJheVsyXSA9IFsn54yq6IKJ57um6JmrJywgJ+WQuOihgOiZqyddXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGRhdGEubXVsdGlBcnJheVsyXSA9IFsn6JuU6JmrJ11cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tdWx0aUFycmF5WzJdID0gWyfomoLomoEnLCAn6JqC6J+lJ11cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tdWx0aUFycmF5WzJdID0gWyfmsrPomownLCAn6JyX54mbJywgJ+ibnuidkyddXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIGRhdGEubXVsdGlBcnJheVsyXSA9IFsn5piG6JmrJywgJ+eUsuWjs+WKqOeJqScsICfom5vlvaLliqjniaknLCAn5aSa6Laz5Yqo54mpJ11cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZGF0YS5tdWx0aUluZGV4WzFdKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGRhdGEubXVsdGlBcnJheVsyXSA9IFsn6bKr6bG8JywgJ+W4pumxvCddXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGRhdGEubXVsdGlBcnJheVsyXSA9IFsn6Z2S6JuZJywgJ+Wog+Wog+mxvCddXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGRhdGEubXVsdGlBcnJheVsyXSA9IFsn6Jyl6Jy0JywgJ+m+nycsICflo4HomY4nXVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5tdWx0aUluZGV4WzJdID0gMFxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5tdWx0aUluZGV4KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldERhdGEoZGF0YSlcbiAgICAgIH1cbiAgICAgIG9uUmVhZHkoZSkge1xuICAgICAgICB0aGlzLmF1ZGlvQ3R4ID0gd2VweS5jcmVhdGVBdWRpb0NvbnRleHQoJ215QXVkaW8nKVxuICAgICAgfVxuICAgICAgYXVkaW9QbGF5KCkge1xuICAgICAgICB0aGlzLmF1ZGlvQ3R4LnBsYXkoKVxuICAgICAgfVxuICAgICAgYXVkaW9QYXVzZSgpIHtcbiAgICAgICAgdGhpcy5hdWRpb0N0eC5wYXVzZSgpXG4gICAgICB9XG4gICAgICBhdWRpbzE0KCkge1xuICAgICAgICB0aGlzLmF1ZGlvQ3R4LnNlZWsoMTQpXG4gICAgICB9XG4gICAgICBhdWRpb1N0YXJ0KCkge1xuICAgICAgICB0aGlzLmF1ZGlvQ3R4LnNlZWsoMClcbiAgICAgIH1cbn1cbiJdfQ==