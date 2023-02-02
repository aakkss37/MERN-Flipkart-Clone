import Products from "../modal/productSchema.js";


export const getProducts = async(request, responce)=>{
	try {
		const products = await Products.find({});
		return responce.status(200).json(products);
	} catch (error) {
		return responce.status(500).json({msg: error.message});
	}
}

