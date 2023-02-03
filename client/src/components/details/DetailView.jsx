import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { styled, Box, Grid, Typography } from '@mui/material';
import Action from './Action';
import ProductDetail from './ProductDetail';



const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;
const Container = styled(Grid)(({ theme }) => ({
	background: '#FFFFFF',
	display: 'flex',
	[theme.breakpoints.down('md')]: {
		margin: 0
	}
}))

const RightContainer = styled(Grid)`
	padding-left: 20px;
    margin-top: 35px;
    & > p {
        margin-top: 10px;
    }
`;




const DetailView = () => {
	const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'


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
		<Component>
			<Container container>
				<Grid item lg={4} md={4} sm={8} xs={12}>
					<Action product={product} />
				</Grid>
				<RightContainer item lg={8} md={8} sm={8} xs={12}>
					<Typography>{product.title.longTitle}</Typography>
					<Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
						8 Ratings & 1 Reviews
						<span><img src={fassured} style={{ width: 77, marginLeft: 20 }} alt='img'/></span>
					</Typography>
					<Typography>
						<span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;
						<span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
						<span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
					</Typography>
					<ProductDetail product={product} />
				</RightContainer>
			</Container>
		</Component>
	)
}

export default DetailView