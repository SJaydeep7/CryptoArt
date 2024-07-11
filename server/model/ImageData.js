const mongoose = require('mongoose')

const ImageDataSchema = new mongoose.Schema({
  name: String,
  jobPost: String,
  imagePath: String,
  imageName: String,
});
const ImageData = mongoose.model('uploads', ImageDataSchema);

module.exports = ImageData;