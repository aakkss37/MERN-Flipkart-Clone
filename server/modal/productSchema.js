import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
		unique: true
	},
	url: String,
	detailUrl: String,
	title: Object,
	price: Object,
	quantity: Number,
	description: String,
	discoun: String,
	tagline: String
})

const Products = mongoose.model('product', productSchema);
export default  Products;