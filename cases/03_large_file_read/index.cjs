/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-05-31 19:31:34
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-05-31 19:31:38
 */
// 此文件为直接复制内容
const fs = require('fs');
const readline = require('readline');

let errorCount = 0;

// 创建 readline 接口
const rl = readline.createInterface({
  input: fs.createReadStream('./logs/huge_app.log'),
  output: process.stdout, // 可选，这里不用输出，只是占位
  terminal: false,
});

// 逐行事件
rl.on('line', (line) => {
  if (line.includes('ERROR')) {
    errorCount++;
  }
});

rl.on('close', () => {
  console.log(`✅ 扫描完成，包含 ERROR 的行数: ${errorCount}`);
});
