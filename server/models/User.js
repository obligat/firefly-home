import mongoose from 'mongoose';

const User = mongoose.model('User', {
  name: String,
  password: String
});

export default  User;