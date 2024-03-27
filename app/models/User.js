import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/, // Email format validation
  },
  password: {
    type: String,
    required: true,
    minlength: 8, // Minimum password length
  },
});

const User = model('User', userSchema);
export default User;
