// api/delete-image.js
const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

router.post('/delete-image', async (req, res) => {
  const { public_id } = req.body;

  if (!public_id) {
    return res.status(400).json({ error: 'public_id is required' });
  }

  try {
    const result = await cloudinary.uploader.destroy(public_id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete image', details: error.message });
  }
});

module.exports = router;
