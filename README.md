# jsmonitor
js性能分析工具

# api介绍
## mark(string)  --- 加入监控点
```
jsmonitor.mark('这个一个监控点')
jsmonitor.mark('这个第二个监控点')
```

## output  --- 输入监控信息
```
jsmonitor.output

这个一个监控点__1000__>这个第二个监控点
```

## clearMark()  --- 清楚已记录的监控信息

## start()  --- 打开监控（默认打开）

## end()  --- 关闭监控（可在开发环境关闭）

## time  --- 返回页面性能信息