import express, { json } from 'express';
import { connect, model, Schema } from 'mongoose';
import { hash, compare } from 'bcrypt';
import cors from 'cors';

// Inisialisasi Express App
const app = express();

// Middleware
app.use(json());
app.use(cors());

// Koneksi ke MongoDB
connect(
  'mongodb+srv://cybershop:cybershop@cluster0.2i9vhga.mongodb.net/CyberShopDB',
).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Definisi Model User
const User = model('User', new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
}));

// Endpoint Signup
app.post('/signup', async (req, res) => {
  console.log('Received request:', req.body);
    const { firstName, lastName, email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        console.log('Email already in use');
        return res.status(409).send({ message: 'Email already in use' });
      }
  
      const hashedPassword = await hash(password, 10);
      const user = new User({ firstName, lastName, email, password: hashedPassword });
      await user.save();
      console.log('User created successfully');
      res.status(201).send({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error signing up user:', error);
      res.status(500).send({ message: 'Error signing up user', error: error.toString() });
    }
  });
  
  // Endpoint Login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        console.log('User not found');
        return res.status(404).send({ message: 'User not found' });
      }
  
      const isMatch = compare(password, user.password);
      if (!isMatch) {
        console.log('Invalid credentials');
        return res.status(400).send({ message: 'Invalid credentials' });
      }
  
      console.log('Logged in successfully');
      res.send({ message: 'Logged in successfully' });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).send({ message: 'Error logging in', error: error.toString() });
    }
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`CyberShop Server running on port ${PORT}`));
