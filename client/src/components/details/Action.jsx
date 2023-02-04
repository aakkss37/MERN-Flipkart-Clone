import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, cartCountIncrease } from '../../redux/actions/cartAction';



const LeftContainer = styled(Box)(({ theme }) => ({
	minWidth: '40%',
	padding: '40px 0 0 80px',
	[theme.breakpoints.down('md')]: {
		padding: '20px 40px'
	}
}))

const Image = styled('img')({
		padding: '15px',
});

const StyledButton = styled(Button)`
    width: 48%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;

const Action = ({ product }) => {
	// console.log("item +=+=+=> ", product);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const addToCartHandler = ()=>{
		dispatch(addToCart(product));
		dispatch(cartCountIncrease());
		navigate('/cart');
	}

	return (
		<LeftContainer>
			<Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%', }}>
				<Image src={product.detailUrl} /><br />
			</Box>
			<StyledButton 	
				style={{ marginRight: 10, background: '#ff9f00' }} variant="contained" 
				onClick={addToCartHandler}
			>
				<Cart />Add to Cart
			</StyledButton>
			<StyledButton style={{ background: '#fb641b' }} variant="contained"><Flash /> Buy Now</StyledButton>
		</LeftContainer>
	)
}


export default Action;