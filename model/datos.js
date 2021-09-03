import mongoose from 'mongoose';
import {MONGO_URI} from '../utils/config.js';

async function initDatabase() {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
};

export { initDatabase }