import {Schema, model, models} from 'mongoose'

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: [true,'email already exists' ],
        lowercase: true
    },
    userName :{
        type: String,
        required: [true, 'username is required'],
        unique: [true,'username already exists' ],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
        lowercase: true
    },
    image:{
        type: String,
        default: '/user.png'
    }
   
})

const User = models.User || model('User', userSchema);
export default User;