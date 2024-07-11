const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const ImageData = require('./model/ImageData');
const ImageKit = require('imagekit');
const verifyToken = require('./handler/tokenverify')
const nodemailer = require("nodemailer");
const uuid = require("uuid");


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const imagekit = new ImageKit({
  publicKey: 'public_gTIDMhEBALNCLQn2gGT7CHYK8zY=',
  privateKey: 'private_rXBcyHckkj7CC+77c6JTostXgX4=',
  urlEndpoint: 'https://ik.imagekit.io/cryptoartproject',
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.APP_PASSWORD, 
  },
});


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


app.post('/api/signup/:role', async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    const role = req.params.role;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }
    const existingUser = await User.findOne({ username: username });

    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword, role });
    await newUser.save();
    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const userAgent = req.get('User-Agent');
    if(userAgent && userAgent.includes('Mozilla') || userAgent.includes('Chrome') || userAgent.includes('edg'))
    {
      const expirationTime = 1800;
      const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: expirationTime });
      res.json({ token, role: user.role }); 
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});


app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    const { name, jobPost } = req.body;
    const { buffer, originalname } = req.file;

    const imageKitResponse = await imagekit.upload({
      file: buffer,
      fileName: originalname,
    });
    const imageKitName = imageKitResponse.fileId;
    console.log(imageKitName);
    const newUpload = new ImageData({
      name,
      jobPost,
      imagePath: imageKitResponse.url,
      imageName: imageKitName,
    });

    await newUpload.save();

    res.status(201).json({ message: 'Upload successful' });
  } catch (error) {
    console.error('Error uploading:', error);
    res.status(500).json({ message: 'Upload failed' });
  }
});

app.get('/api/images', async (req, res) => {
  try {
    const images = await ImageData.find();
    res.status(200).json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching images' });
  }
});

app.post('/api/delete', async (req, res) => {
  try {
    const { imageName } = req.body;

    const image = await ImageData.findOne({ imageName });

    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }
    console.log(imageName);
    imagekit.deleteFile(imageName, async function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error deleting image from ImageKit' });
      }
      const imageDB = await ImageData.deleteOne({ imageName });
      return res.status(200).json({ message: 'Image deleted successfully' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting image' });
  }
});

app.post('/api/check-role', verifyToken, (req, res) => {
  const { role } = req.decodedToken;
  if (role === 'admin') {
    return res.json({ redirect: '/admin/dashboard' });
  }
  else {
    return res.json({ redirect: '/' });
  }
});

app.post('/api/check-admin', async (req, res) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ username: decoded.username }); 
    if (user && user.role === 'admin') {
      res.json({ isAdmin: true });
    } else {
      res.json({ isAdmin: false });
    }
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

app.post('/api/check-user', async (req, res) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ role: decoded.role }); // Find the user with the given role

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.role === 'user') {
      res.json({ isUser: true });
    } else {
      res.json({ isUser: false });
    }
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

app.post('/api/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const resetToken = uuid.v4();
    const resetTokenExpiry = Date.now() + 3600000;
    user.resetToken = resetToken;
    user.resetTokenExpiry = resetTokenExpiry;
    await user.save();
    const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;

    transporter.verify(function(error, success) {
      if (error) {
        console.log("SMTP connection error:", error);
        res.status(500).json({ error: "SMTP connection error" });
      } else {
        transporter.sendMail({
          from: "modkit1253@gmail.com",
          to: email,
          subject: "Password Reset Request",
          text: `Click the following link to reset your password: ${resetLink}`,
        })
        .then(() => {
          res.status(200).json({ message: "Reset token sent successfully" });
        })
        .catch((sendError) => {
          console.error("Error sending reset token:", sendError);
          res.status(500).json({ error: "Error sending reset token" });
        });
      }
    });
  } catch (error) {
    console.error("Error processing reset request:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.post('/api/reset-password', async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    const user = await User.findOne({ resetToken: token, resetTokenExpiry: { $gt: Date.now() } });
    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetToken = undefined; 
    user.resetTokenExpiry = undefined; 
    await user.save();
    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.post('/api/update', async (req, res) => {
  const { imageName, name, jobPost } = req.body;

  try {
    const updatedImage = await ImageData.findOneAndUpdate(
      { imageName: myImageName },
      { $set: { name: editedName, jobPost: editedJob } },
    );

    if (!updatedImage) {
      return res.status(404).json({ message: 'Image not found' });
    }

    return res.json(updatedImage);
  } catch (error) {
    console.error('Error updating image:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
