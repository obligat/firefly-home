/**
 * Created by zhangsha on 16-8-17.
 */
import mongoose from 'mongoose';

const Rooms = mongoose.model('rooms', {
    image: String
});

export default Rooms;