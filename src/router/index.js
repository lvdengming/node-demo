/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-05-24 10:24:18
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-05-24 11:18:17
 */
const express = require('express');

const bird = require('./bird');
const dog = require('./dog');

const router = express.Router();
router.use('/bird', bird);
router.use('/dog', dog);

module.exports = router;
