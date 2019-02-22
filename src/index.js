class Monitor{
  hasPerformance = !!window.performance;
  dateUtil = this.hasPerformance ? window.performance : Date;
  marks = [];
  runing = true;

  // 加载信息
  get time() {
    if (!this.hasPerformance) {
      console.log('您的浏览器不支持performance');
      return
    }
    const { domainLookupEnd, domainLookupStart, connectEnd, connectStart, responseEnd, responseStart, domComplete, domInteractive, navigationStart, domContentLoadedEventEnd, loadEventEnd } = window.performance.timing;

    return `
      DNS查询耗时 ：${domainLookupEnd - domainLookupStart}
      TCP链接耗时 ：${connectEnd - connectStart}
      request请求耗时 ：${responseEnd - responseStart}
      domready时间 ：${domContentLoadedEventEnd - navigationStart}
      解析dom树耗时 ：${domComplete - domInteractive}
      白屏时间 ：${responseStart - navigationStart}
      onload时间 ：${loadEventEnd - navigationStart}
    `
  }

  get output() {
    if (this.marks.length <= 0) {
      return '没有监控记录'
    }
    const times = this.marks.map((mark, i) => {
      if (i == 0) {
        return `${mark.title}`
      } else {
        return `__${mark.time - this.marks[i - 1].time}__>${mark.title}`
      }
    });
    return times.join('');
  }

  mark(title) {
    if (!this.runing) {
      return
    }
    this.marks.push({
      title,
      time: this.dateUtil.now()
    });
  }

  clearMark() {
    this.marks = [];
  }

  start() {
    this.runing = true;
  }

  stop() {
    this.runing = false;
  }
}

const jsmonitor = new Monitor();
window.jsmonitor = jsmonitor;
export default jsmonitor;