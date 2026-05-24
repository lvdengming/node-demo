/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-05-24 10:24:18
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-05-24 11:17:29
 */
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const chalk = require('chalk');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const router = require('./router');

dotenv.config();

const app = express();
app.use(morgan('combined'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, '../public')));
app.use('/', router);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(process.env.PORT, () => {
  const port = process.env.PORT;
  const message = chalk.green(
    `\nExpress app is running in http://localhost:${port}.\n`,
  );
  console.log(message);
});
