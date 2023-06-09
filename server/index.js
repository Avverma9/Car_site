
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const multerS3 = require('multer-s3');
const multer = require('multer');

const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb+srv://Avverma:Avverma95766@avverma.2g4orpk.mongodb.net/Carfullstack';
const AWS_BUCKET_NAME = 'classroom-training-bucket';
const AWS_ACCESS_KEY_ID = 'AKIAY3L35MCRZNIRGT6N';
const AWS_SECRET_ACCESS_KEY = '9f+YFBVcSjZWM6DG9R4TUN8k8TGe4X+lXmO4jPiU';
const AWS_REGION = 'ap-south-1'; // Update this to the appropriate region for your S3 bucket
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
  email: { type: String, required: false,unique: true },
  mobile: { type: String, required: false },
  password:{ type: String, required: false},
  images: { type: [String], required: false },
});

const signUp = mongoose.model('user', UserSchema);
// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: false },
//   address: { type: String, required: false },
//   email: { type: String, required: false, unique: true },
//   mobile: { type: String, required: false },
//   password: {
//     type: String,
//     required: true,
//     match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
//   },
//   images: { type: [String], required: false },
// });

// const signUp = mongoose.model('user', UserSchema);

//========================================//POST USER //====================================================================
app.post('/signup', upload, async (req, res) => {
  const { name, address,email,mobile,password } = req.body;
  const images = req.files.map(file => file.location);
  const user = new signUp({ name,address, email, mobile, password,images});
  await user.save();
  io.emit('recordAdded', user);
  res.json(user);
});
//========================================GET USER DETAILS===============================================================//
app.get('/get/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await signUp.findById((userId));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

//=============================================SIGN IN===============================================================//
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Find the user in the database
    const user = await signUp.findOne({ email });

    // Check if user exists and compare passwords
    if (user && user.password === password) {
      res.json({ message: 'Sign-in successful', userId : user._id });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});
//============================================ CAR SCHEMA============================================//

const carSchema = new mongoose.Schema({
  budget: { type: String, required: false },
  year: { type: String, required: false },
  bodytype: { type: String, required: false },
  fueltype: { type: String, required: false },
  fromrange:{ type: String, required: false},
  mileage:{ type: String, required: false},
  brand:{ type: String, required: false},
  location:{ type: String, required: false},
  owner:{ type: String, required: false},
  price:{ type: String, required: false},
  model:{ type: String, required: false},
  images: { type: [String], required: false },
});

const cars = mongoose.model('cars', carSchema);
//==================================================CAR SELL===============================================//
app.post('/sell', upload, async (req, res) => {
  const {budget, year, bodytype, fueltype, under, fromrange, mileage, brand, location, owner, price, model} = req.body;
  const images = req.files.map(file => file.location);
  const user = new cars({ budget, year, bodytype, fueltype, under, fromrange, mileage, brand, location, owner, price, model,images});
  await user.save();
  io.emit('recordAdded', user);
  res.json(user);
});
//==============================================GET CAR BY MODEL==============================================//
app.get('/:model', async (req, res) => {
  const {model} = req.params

  try {
    const filteredRecords = await cars.find({ model});

    if (filteredRecords.length === 0) {
      return res.status(404).json({ message: 'No records found for the specified brand.' });
    }

    res.json(filteredRecords);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
});
//===========================================GET ALL CALL====================================================//
app.get('/', async (req, res) => {
  const records = await cars.find();
  res.json(records);
});
//=======================================Create car cart=================================================//


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));