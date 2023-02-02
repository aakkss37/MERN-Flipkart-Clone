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
	const products = useSelector(state => state.getProducts)
	console.log("products ====> ", products)
	const dispatch = useDispatch();
	useEffect(()=>{
		dispatch(getProducts());
	}, [dispatch])


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