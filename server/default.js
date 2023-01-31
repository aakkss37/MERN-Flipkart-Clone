import { products } from "./constant/data";
import Products from "./modal/productSchema";

const DefaultData = async() => {
	try {
		const responce = await Products.insertMany(products);
		console.log("Data imported sucessfully");
	} catch (error) {
		console.log("Error while incerting default data: ", error.message)
	}
}
export default DefaultData;