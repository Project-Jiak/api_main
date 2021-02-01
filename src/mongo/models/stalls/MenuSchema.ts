import mongoose from 'mongoose';

const MenuSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  available: {
    type: Boolean,
  },
  price: {
    type: Number,
  },
},
{
  strict: true,
});

export default MenuSchema;
