/**
 * Created by fcc on 16-8-18.
 */
import mongoose from 'mongoose';

const House = mongoose.model('House', {
  _id:Number,
  name: String,
  price: Number,
  address: String,
  city: String,
  type: String,
  image: Array,
  houseDescription: String,
  situation: String
});

export default  House;