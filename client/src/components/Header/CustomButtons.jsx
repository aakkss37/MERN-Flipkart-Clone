
import React, { useState, useContext } from 'react';

import { Box, Typography, Button, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import LoginDialog from '../login/LoginDialog';

import { DataContext } from '../../contextAPI/Dataprovider';

import Profile from './Profile';



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
	const [openDialog, setOpenDialog] = useState(false);
	const { loggedinUser } = useContext(DataContext)


	return (
		<Wrapper>
			
			{
				loggedinUser.name
				?
					<Profile />
				:
				<LoginStyled variant="contained" style={{ marginRight: 40, marginLeft: 20 }} onClick={() => setOpenDialog(true)}>Login</LoginStyled>
			}

			<Typography style={{ marginTop: 3, width: 135, marginRight: 40 }}>Become a Seller</Typography>
			<Typography style={{ marginTop: 3, marginRight: 40 }}>More</Typography>

			<Container style={{ marginRight: 40 }}>
				<ShoppingCart />
				<Typography>&nbsp;Cart</Typography>
			</Container>
			<LoginDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
		</Wrapper>
	)
}

export default CustomButtons;