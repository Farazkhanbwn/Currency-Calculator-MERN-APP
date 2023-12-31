import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    history: {
        type: String,
        required: true,
    },
    uid: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("History", userSchema);

export default User;
