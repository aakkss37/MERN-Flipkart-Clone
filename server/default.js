import { products } from "./constant/data.js";
import Products from "./modal/productSchema.js";

const DefaultData = async() => {
	try {
		await Products.insertMany(products);
		console.log("Data imported sucessfully");
	} catch (error) {
		console.log("Error while incerting default data: ", error.message)
	}
}
export default DefaultData;