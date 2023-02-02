import React, { Fragment, useEffect } from 'react'
import { Box, styled } from '@mui/material'
import { getProducts } from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux';


// COMPONENTS
import Banner from './Banner'
import NavBar from './NavBar'
import Slide from './slide/Slide';

// STYLE
const Component = styled(Box)`
	padding: 8px;
	background: #f2f2f2
`


const Home = () => {

	const dispatch = useDispatch();
	useEffect(()=>{
		dispatch(getProducts());
	}, [dispatch])


	const getProduct = useSelector(state => state.getProducts)
//  console.log("products ====> ", getProduct)
//  const products  = getProduct.products ===> 'products' is an object.. to get access of any of the field of this object.. we can use .(dot) operator.. OR obj de-structuring
	const { products } = getProduct //--> "Object De-structuring" same as 'getProduct.products' of above line
console.log('products ==> ', products)

	return (
		<>
			<NavBar />

			<Component>
				<Banner />
				<Slide products={products} title="Deal of the Day" timer={true}/>
				<Slide products={products} title="Discount for You" />
				<Slide products={products} title="Suggested Items" />
				<Slide products={products} title="Top Selection" />
				<Slide products={products} title="Recommonded Items" />
				<Slide products={products} title="Trending Offers" />
				<Slide products={products} title="Top Deals of Accessories" />
			</Component>

		</>
	)
}

export default Home