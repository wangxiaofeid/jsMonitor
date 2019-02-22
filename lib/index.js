'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Monitor = function () {
  function Monitor() {
    (0, _classCallCheck3.default)(this, Monitor);
    this.hasPerformance = !!window.performance;
    this.dateUtil = this.hasPerformance ? window.performance : Date;
    this.marks = [];
    this.runing = true;
  }

  (0, _createClass3.default)(Monitor, [{
    key: 'mark',
    value: function mark(title) {
      if (!this.runing) {
        return;
      }
      this.marks.push({
        title: title,
        time: this.dateUtil.now()
      });
    }
  }, {
    key: 'clearMark',
    value: function clearMark() {
      this.marks = [];
    }
  }, {
    key: 'start',
    value: function start() {
      this.runing = true;
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.runing = false;
    }
  }, {
    key: 'time',


    // 加载信息
    get: function get() {
      if (!this.hasPerformance) {
        console.log('您的浏览器不支持performance');
        return;
      }
      var _window$performance$t = window.performance.timing,
          domainLookupEnd = _window$performance$t.domainLookupEnd,
          domainLookupStart = _window$performance$t.domainLookupStart,
          connectEnd = _window$performance$t.connectEnd,
          connectStart = _window$performance$t.connectStart,
          responseEnd = _window$performance$t.responseEnd,
          responseStart = _window$performance$t.responseStart,
          domComplete = _window$performance$t.domComplete,
          domInteractive = _window$performance$t.domInteractive,
          navigationStart = _window$performance$t.navigationStart,
          domContentLoadedEventEnd = _window$performance$t.domContentLoadedEventEnd,
          loadEventEnd = _window$performance$t.loadEventEnd;


      return '\n      DNS\u67E5\u8BE2\u8017\u65F6 \uFF1A' + (domainLookupEnd - domainLookupStart) + '\n      TCP\u94FE\u63A5\u8017\u65F6 \uFF1A' + (connectEnd - connectStart) + '\n      request\u8BF7\u6C42\u8017\u65F6 \uFF1A' + (responseEnd - responseStart) + '\n      domready\u65F6\u95F4 \uFF1A' + (domContentLoadedEventEnd - navigationStart) + '\n      \u89E3\u6790dom\u6811\u8017\u65F6 \uFF1A' + (domComplete - domInteractive) + '\n      \u767D\u5C4F\u65F6\u95F4 \uFF1A' + (responseStart - navigationStart) + '\n      onload\u65F6\u95F4 \uFF1A' + (loadEventEnd - navigationStart) + '\n    ';
    }
  }, {
    key: 'output',
    get: function get() {
      var _this = this;

      if (this.marks.length <= 0) {
        return '没有监控记录';
      }
      var times = this.marks.map(function (mark, i) {
        if (i == 0) {
          return '' + mark.title;
        } else {
          return '__' + (mark.time - _this.marks[i - 1].time) + '__>' + mark.title;
        }
      });
      return times.join('');
    }
  }]);
  return Monitor;
}();

var jsmonitor = new Monitor();
window.jsmonitor = jsmonitor;
exports.default = jsmonitor;
//# sourceMappingURL=index.js.map