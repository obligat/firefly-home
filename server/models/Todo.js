import mongoose from 'mongoose';

const Todo = mongoose.model('Todo', { 
  text: String
});

export default Todo;