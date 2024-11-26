import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists'],
        lowercase: true
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    image: {
        type: String,
        default: '/user.png'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = models.User || model('User', userSchema);
export default User;