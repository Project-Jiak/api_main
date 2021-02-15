import mongoose from 'mongoose';

import MenuSchema from './MenuSchema';

const StallSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
  },
  uen: {
    unique: true,
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  operatinghours: {
    monday: {
      open: {
        type: Number,
      },
      close: {
        type: Number,
      },
    },
    tuesday: {
      open: {
        type: Number,
      },
      close: {
        type: Number,
      },
    },
    wednesday: {
      open: {
        type: Number,
      },
      close: {
        type: Number,
      },
    },
    thursday: {
      open: {
        type: Number,
      },
      close: {
        type: Number,
      },
    },
    friday: {
      open: {
        type: Number,
      },
      close: {
        type: Number,
      },
    },
    saturday: {
      open: {
        type: Number,
      },
      close: {
        type: Number,
      },
    },
    sunday: {
      open: {
        type: Number,
      },
      close: {
        type: Number,
      },
    },
    menu: [
      MenuSchema,
    ],
  },
},
{
  strict: true,
});

export default StallSchema;
