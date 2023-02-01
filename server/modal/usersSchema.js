import mongoose, { mongo } from "mongoose";


const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
		lowercase: true
	},
	phone: {
		type: Number,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const Users = mongoose.model('user', userSchema);
export default Users;