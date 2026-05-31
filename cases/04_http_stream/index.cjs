/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-05-31 19:34:56
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-05-31 19:35:42
 */
// 此文件为直接复制内容
const fs = require('fs');
const zlib = require('zlib');
const http = require('http');

http
  .createServer((req, res) => {
    // 告诉浏览器内容经过了 gzip 压缩
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Content-Encoding': 'gzip',
    });

    // 创建文件读取流 -> 压缩流 -> HTTP 响应流
    const readStream = fs.createReadStream('./data/huge_data.json');
    const gzipStream = zlib.createGzip();

    readStream
      .pipe(gzipStream)
      .pipe(res)
      .on('finish', () => console.log('✅ 压缩响应发送完成'));
  })
  .listen(3000, () => console.log('Server running on port 3000'));
