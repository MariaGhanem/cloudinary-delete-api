// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const deleteImageRouter = require('./api/delete-image');

const app = express();
const PORT = process.env.PORT || 3000;

// تفعيل CORS للسماح بطلبات من جميع المصادر (بإمكانك تحديد النطاق لو تحب)
app.use(cors());

// لتحليل جسم الطلبات بصيغة JSON
app.use(bodyParser.json());

// ربط الراوتر الخاص بحذف الصور
app.use('/', deleteImageRouter);

// بدء السيرفر
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
