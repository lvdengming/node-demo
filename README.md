<!--
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-05-24 10:24:18
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-05-24 13:16:00
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

## 参考

- express: [https://expressjs.com/](https://expressjs.com/)
- express(zh-cn): [https://expressjs.com/zh-cn/](https://expressjs.com/zh-cn/)
- DeepSeek - Node流操作案例教学: [https://chat.deepseek.com/share/v24lsramyf153o5sgu](https://chat.deepseek.com/share/v24lsramyf153o5sgu)
