import { styled, Box, Grid, Typography, Button } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import TotleBill from './TotleBill';



const Component = styled(Grid)(({ theme }) => ({
	padding: '30px 135px',
	display: 'flex',
	[theme.breakpoints.down('sm')]: {
		padding: '15px 0'
	}
}));
const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;
const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;



const Cart = () => {
	const cartItem = useSelector(state => state.cart);
	const count = useSelector(state => state.cartItemCount);

	// console.log("cartItem ---> ", cartItem);
	// console.log("product count ---> ", count);


	return (
		<>
			{
				cartItem.length ?
					<Component container>
						<Grid item lg={9} md={9} sm={12} xs={12}>
							<Header>
								<Typography style={{ fontWeight: 600 }}>My Cart &nbsp;({count})</Typography>
							</Header>
							{
								cartItem.map(item => (
									<CartItem item={item}/>
								))
							}
							<BottomWrapper>
								<StyledButton variant="contained">Place Order</StyledButton>
							</BottomWrapper>

						</Grid>
						<Grid item lg={3} md={3} sm={12} xs={12}>
							<TotleBill cartItems={cartItem} />
						</Grid>
					</Component>
					:
					<div>Empty</div>
			}
		</>
	)
}

export default Cart