import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists'],
        lowercase: true
    },
    userName: {
        type: String,
        required: [true, 'Username is required'],
        // Removed the strict regex to allow Google-generated usernames
        lowercase: true
    },
    image: {
        type: String,
        default: '/user.png'
    }
});

const User = models.User || model('User', userSchema);
export default User;