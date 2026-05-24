/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-05-24 13:02:52
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-05-24 13:14:51
 */
import fs from 'fs';
import path from 'path';
import { Transform } from 'stream';

const root = path.join(process.cwd(), 'cases/02_transform_stream');
// 1. 自定义转换流：将文本块转为大写
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    // chunk 是 Buffer，转为字符串处理后再转回 Buffer
    const upperCased = chunk.toString().toUpperCase();
    callback(null, upperCased);
  },
});

// 2. 串联管道
fs.createReadStream(path.join(root, 'source/access.log'))
  .pipe(upperCaseTransform)
  .pipe(fs.createWriteStream(path.join(root, 'target/access_upper.log')))
  .on('finish', () => console.log('✅ 日志已全部转为大写'));
