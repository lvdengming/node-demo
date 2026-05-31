<!--
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-05-24 10:24:18
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-05-31 19:45:13
-->

# node-demo

NodeJS cases collection.

## 案例

### 01\_大文件复制（基础管道 pipe）

最经典的流式文件复制，内存占用极低，不管文件是 10MB 还是 10GB。

**核心要点：**

- pipe 自动处理了 背压（Backpressure），即写入慢时自动暂停读取，防止内存爆满。
- 不要用 fs.readFile + fs.writeFile 处理大文件，那会把整个文件加载进内存。

[https://github.com/lvdengming/node-demo/tree/master/cases/01_large_file_copy](https://github.com/lvdengming/node-demo/tree/master/cases/01_large_file_copy)

### 02\_数据转换（Transform 流）

假设你有一个巨大的访问日志 access.log，需要实时将每行内容转为大写，然后输出到新文件。我们可以手写一个 Transform 流。

**核心要点：**

- Transform 既是可读也是可写流，位于管道中间处理数据。
- 每个数据块（chunk）独立处理，不依赖前后文。

[https://github.com/lvdengming/node-demo/tree/master/cases/02_transform_stream](https://github.com/lvdengming/node-demo/tree/master/cases/02_transform_stream)

### 03\_逐行读取超大文件（实用场景）

处理 GB 级日志文件，统计包含 "ERROR" 的行数。用 readline 模块，它底层就是流。

**核心要点：**

- readline 内部使用流逐块读取，自动按换行符分割。
- 对于逐行 JSON 解析、CSV 统计非常高效。

[https://github.com/lvdengming/node-demo/tree/master/cases/03_large_file_read](https://github.com/lvdengming/node-demo/tree/master/cases/03_large_file_read)

### 04_HTTP 响应流与压缩（网络场景）

前端请求一个大型 JSON 文件，服务端直接通过流读取文件并压缩后响应，大幅减少传输时间和带宽。

**核心要点：**

- 服务端内存中只保留极少量的缓冲数据块。
- 浏览器收到 .gz 数据会自动解压，用户无感知。

[https://github.com/lvdengming/node-demo/tree/master/cases/04_http_stream](https://github.com/lvdengming/node-demo/tree/master/cases/04_http_stream)

### 05\_处理背压（Backpressure）——自己写 Writable 流

有时你需要把数据写入一个慢速目标（比如数据库插入），必须主动处理背压，否则内存会堆积。

**核心要点：**

- write() 返回 false 时，说明目标流处理不过来了，应暂停写入。
- 监听 drain 事件恢复写入，避免内存无限堆积。

[https://github.com/lvdengming/node-demo/tree/master/cases/05_custom_back_pressure](https://github.com/lvdengming/node-demo/tree/master/cases/05_custom_back_pressure)

## 06\_大文件上传

参考：

- [Express手动处理文件上传](https://chat.deepseek.com/share/i96cigfrub6d31p9qu)
- [大文件上传实现指南](https://chat.deepseek.com/share/fsf6gz4rl1t7xufux3)

## 参考

- express: [https://expressjs.com/](https://expressjs.com/)
- express(zh-cn): [https://expressjs.com/zh-cn/](https://expressjs.com/zh-cn/)
- DeepSeek - Node流操作案例教学: [https://chat.deepseek.com/share/v24lsramyf153o5sgu](https://chat.deepseek.com/share/v24lsramyf153o5sgu)
