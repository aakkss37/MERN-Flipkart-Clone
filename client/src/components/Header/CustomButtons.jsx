
import React, { useState, useContext } from 'react';

import { Box, Typography, Button, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import LoginDialog from '../login/LoginDialog';

import { DataContext } from '../../contextAPI/Dataprovider';

import Profile from './Profile';
import { Link } from 'react-router-dom';



const Wrapper = styled(Box)`
	display: flex;
	margin 0 3% 0 auto;
	&>*{
		font-size: 16px;
		align-items: center;
	}
`
const Container = styled(Link)`
	display: flex;
	margin-right: 40; 
	cursor: "pointer";
	
	color: white;
`
const LoginStyled = styled(Button)(({ theme }) => ({
	color: '#2874f0',
	background:' #FFFFFF',
	textTransform: 'none',
	padding: '5px 40px',
	borderRadius: '2px',
	boxShadow: 'none',
	marginRight: 40,
	marginLeft: 20,
	fontWeight: 600,
	height: '32px',
	'&: hover': {
		color: '#2874f0',
		background: '#FFFFFF',
	},
	[theme.breakpoints.down('md')]: {
		padding: '2px 4px',
		marginRight: 10, 
		marginLeft: 5
	}
}))
const MoreOption = styled(Typography)(({ theme }) => ({
	marginTop: 3,  
	marginRight: 60,
	[theme.breakpoints.down('md')]: {
		display: 'none',
	}
}))



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
				<LoginStyled variant="contained" onClick={() => setOpenDialog(true)}>Login</LoginStyled>
			}

			<MoreOption style={{ width: 150, cursor: 'pointer' }} >Become a Seller</MoreOption>
			<MoreOption style={{cursor: 'pointer'}}>More</MoreOption>

			<Container to={'/cart'} style={{ textDecoration: 'none'  }}>
				<ShoppingCart />
				<Typography>&nbsp;Cart</Typography>
			</Container>
			<LoginDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
		</Wrapper>
	)
}

export default CustomButtons;