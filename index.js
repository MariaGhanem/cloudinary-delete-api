require("dotenv").config();
const express = require("express");
const cors = require("cors");
const deleteImageRoute = require("./routes/delete-image");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/delete-image", deleteImageRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
