/**
 * Created by zhangsha on 16-8-17.
 */
import mongoose from 'mongoose';

const Room = mongoose.model('rooms', {
  image: String
});

export default Room;