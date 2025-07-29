import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'diuwox1o6',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { public_id } = req.body;
  if (!public_id) {
    return res.status(400).json({ message: 'Missing public_id' });
  }

  try {
    const result = await cloudinary.uploader.destroy(public_id);
    if (result.result === 'ok') {
      res.status(200).json({ success: true });
    } else {
      res.status(500).json({ success: false, message: result.result });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
