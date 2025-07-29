const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "diuwox1o6",
  api_key: "725275734184246",
  api_secret: "6iVigYeWyitBbExZF70TEmJbcd4"
});

router.post("/", async (req, res) => {
  const { public_id } = req.body;
  if (!public_id) return res.status(400).json({ error: "Missing public_id" });

  try {
    const result = await cloudinary.uploader.destroy(public_id);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
