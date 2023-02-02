import React, { Fragment, useEffect } from 'react'
import { Box, styled } from '@mui/material'
import { getProducts } from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS
import Banner from './Banner'
import NavBar from './NavBar'


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
			</Component>

		</>
	)
}

export default Home