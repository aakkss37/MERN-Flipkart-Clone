import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux'

const DetailView = () => {

	const [searchParams] = useSearchParams();
	const product_id = searchParams.get('product_id');
	console.log("product id =====> ", product_id);


	const getProduct = useSelector(state => state.getProducts)
	const { products } = getProduct
	console.log("products =====> ", products);
	var product = {}
	products.forEach((item)=> {
		if(item._id === product_id){
			product = item;
		} 
	})
	console.log("found item +=+=+=> ", product);

	return (
		<div>
			<h1>{product.title.shortTitle}</h1>
			<h3>{product._id}</h3>
			<p>{product.url}</p>
			<p>{product.description}</p>
		</div>
	)
}

export default DetailView