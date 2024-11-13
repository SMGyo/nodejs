// middleApp.js
const express = require('express');
const cors = reequire('cors');

const app = express();

// 제한없이 모든 요청에 응답
app.use(cors());