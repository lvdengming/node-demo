/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-05-24 12:07:18
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-05-24 12:16:04
 */
import fs from 'fs';
import path from 'path';

const root = path.join(process.cwd(), 'cases/01_large_file_copy');

// 创建可读流和可写流
const readableStream = fs.createReadStream(
  path.join(root, './source/steam.dmg'),
);
const writeableStream = fs.createWriteStream(
  path.join(root, './target/steam_copy.dmg'),
);

// 通过管道链接：读 -> 写
readableStream.pipe(writeableStream);

// 监听完成事件
writeableStream.on('finish', () => {
  console.log('✅ 文件复制完成（流式操作，内存友好）');
});

// 监听错误事件（生产环境必须加）
readableStream.on('error', (err) => console.error('读取出错', err));
writeableStream.on('error', (err) => console.error('写入出错', err));
