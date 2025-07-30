const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
    },
    username: {
        type: String,
        require: [true , "Your username is required"],
    },
    contact: {
        type: Number,
        require: [true , "Your contact no. is required"],
        unique: true,
    },
    password: {
        type: String,
        require: [true , "Your password is required"],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

userSchema.pre("save" , async function(){
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = { userSchema };