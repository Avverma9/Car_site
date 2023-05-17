
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const multerS3 = require('multer-s3');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb+srv://Avverma:Avverma95766@avverma.2g4orpk.mongodb.net/Carfullstack';
const AWS_BUCKET_NAME = 'classroom-training-bucket';
const AWS_ACCESS_KEY_ID = 'AKIAY3L35MCRZNIRGT6N';
const AWS_SECRET_ACCESS_KEY = '9f+YFBVcSjZWM6DG9R4TUN8k8TGe4X+lXmO4jPiU';
const AWS_REGION = 'ap-south-1'; // Update this to the appropriate region for your S3 bucket
const JWT_SECRET = 'YOUR_JWT_SECRET_KEY';
const s3 = new S3Client({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: AWS_BUCKET_NAME,
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  }),
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only images are allowed.'));
    }
  }
}).array('images', 10);
// ===============================================user Schema========================================================//
const UserSchema = new mongoose.Schema({
  name: { type: String, required: false },
  address: { type: String, required: false },
  email: { type: String, required: false },
  mobile: { type: String, required: false },
  password:{ type: String, required: false},
  images: { type: [String], required: false },
});

const signUp = mongoose.model('user', UserSchema);

app.post('/signup', upload, async (req, res) => {
  const { name, address,email,mobile,password } = req.body;
  const images = req.files.map(file => file.location);
  const user = new signUp({ name,address, email, mobile, password,images});
  await user.save();
  io.emit('recordAdded', user);
  const token = jwt.sign({ userId: user._id }, JWT_SECRET);
  res.json({ token });
 
});

app.get('/get', async (req, res) => {
  const records = await signUp.find();
  res.json(records);
});

app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database
    const user = await signUp.findOne({ email });

    // Check if user exists and compare passwords
    if (user && user.password === password) {
      const token = jwt.sign({ userId: user._id }, JWT_SECRET);

      // Return the token in the response
      res.json({ token });

      // Store the token in localStorage
      localStorage.setItem('token', token);
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});




const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // Extract the token value from the 'Authorization' header
  const tokenValue = token.split(' ')[1];

  jwt.verify(tokenValue, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }

    req.userId = decoded.userId;
    next();
  });
};

app.get('/profile', verifyToken, async (req, res) => {
  try {
    const user = await signUp.findById(req.userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//=====================================Car===============================================



