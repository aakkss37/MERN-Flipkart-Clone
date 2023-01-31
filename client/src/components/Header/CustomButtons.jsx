
import React from 'react';

import { Box, Typography, Button, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';




const Wrapper = styled(Box)`
	display: flex;
	margin 0 3% 0 auto;
	&>*{
		margin-right: 40px;
		font-size: 16px;
		align-items: center;
	}
`
const Container = styled(Box)`
	display: flex;
`
const LoginStyled = styled(Button)`
	color: #2874f0;
	background: #FFFFFF;
	text-transform: none;
	padding: 5px 40px;
	border-radius: 2px;
	box-shadow: none;
	margin-right: 20px;
	font-weight: 600;
	height: 32px;
`



const CustomButtons = () => {


	return (
		<Wrapper>
			<LoginStyled variant="contained">Login</LoginStyled>

			<Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
			<Typography style={{ marginTop: 3 }}>More</Typography>

			<Container>
				<ShoppingCart />
				<Typography>&nbsp;Cart</Typography>
			</Container>
		</Wrapper>
	)
}

export default CustomButtons;