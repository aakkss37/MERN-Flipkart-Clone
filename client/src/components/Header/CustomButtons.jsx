
import React from 'react';

import { Box, Typography, Button, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';




const Wrapper = styled(Box)`
	display: flex;
	margin 0 3% 0 auto;
	&>*{
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
	&:hover{
		color: #2874f0;
		background: #FFFFFF;
	}
`



const CustomButtons = () => {


	return (
		<Wrapper>
			<LoginStyled variant="contained" style={{ marginRight: 40 }}>Login</LoginStyled>

			<Typography style={{ marginTop: 3, width: 135, marginRight: 40 }}>Become a Seller</Typography>
			<Typography style={{ marginTop: 3, marginRight: 40 }}>More</Typography>

			<Container style={{ marginRight: 40 }}>
				<ShoppingCart />
				<Typography>&nbsp;Cart</Typography>
			</Container>
		</Wrapper>
	)
}

export default CustomButtons;