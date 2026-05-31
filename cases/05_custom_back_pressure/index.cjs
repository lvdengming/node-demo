/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-05-31 19:38:33
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-05-31 19:38:44
 */
// 此文件为直接复制内容
const { Writable } = require('stream');

// 模拟一个慢速写入操作
const slowWritable = new Writable({
  write(chunk, encoding, callback) {
    console.log(`正在写入: ${chunk.toString().trim()}`);
    // 模拟异步延迟，例如写入数据库
    setTimeout(() => {
      console.log('写入完成，继续下一个');
      callback(); // 调用 callback 表示处理完毕，可以接收下一块数据
    }, 1000);
  },
});

// 模拟生产数据
function generateData() {
  let i = 0;
  function writeNext() {
    let canContinue = true;
    while (i < 10 && canContinue) {
      canContinue = slowWritable.write(`数据块 ${i++}\n`);
    }
    if (i < 10) {
      // 内部缓冲区已满，等待 drain 事件再继续写
      slowWritable.once('drain', writeNext);
    } else {
      slowWritable.end();
    }
  }
  writeNext();
}

generateData();

slowWritable.on('finish', () => console.log('✅ 所有数据已处理'));
