<!--
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-05-24 10:24:18
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-05-24 12:07:06
-->

# node-demo

NodeJS cases collection.

## 案例

### 01\_大文件复制（基础管道 pipe）

最经典的流式文件复制，内存占用极低，不管文件是 10MB 还是 10GB。

核心要点：

- pipe 自动处理了 背压（Backpressure），即写入慢时自动暂停读取，防止内存爆满。
- 不要用 fs.readFile + fs.writeFile 处理大文件，那会把整个文件加载进内存。

## 参考

- express: [https://expressjs.com/](https://expressjs.com/)
- express(zh-cn): [https://expressjs.com/zh-cn/](https://expressjs.com/zh-cn/)
- DeepSeek - Node流操作案例教学: [https://chat.deepseek.com/share/v24lsramyf153o5sgu](https://chat.deepseek.com/share/v24lsramyf153o5sgu)
