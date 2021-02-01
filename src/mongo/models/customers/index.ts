import mongoose from 'mongoose';
import validator from 'validator';

const CustomerSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  email: {
    unique: true,
    type: String,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: 'Mongoose: Please enter a valid email',
    },
  },
  password: {
    type: String,
    required: true,
  },
},
{
  strict: true,
});

export default CustomerSchema;
