/**
 * Created by fcc on 16-8-18.
 */
import mongoose from 'mongoose';

const House = mongoose.model('House', {
  name: String,
  price: Number,
  address: String,
  city: String,
  type: String,
  image: String
});

export default  House;