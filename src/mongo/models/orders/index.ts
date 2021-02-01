import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  customerId: {
    type: String,
    required: true,
  },
  uen: {
    type: String,
    required: true,
  },
  menuId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
},
{
  strict: true,
});

export default OrderSchema;
