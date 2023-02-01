import React, { useContext, useState } from 'react';
import { Box, Menu, MenuItem, Typography, styled } from '@mui/material';
import { DataContext } from '../../contextAPI/Dataprovider';

import { capitalizeFirstLetter } from '../../constant/modify';

// ICONS
import { AccountCircle, AccountBalanceWallet, FavoriteBorder, LocalActivity, Notifications } from '@mui/icons-material';
import BoltIcon from '@mui/icons-material/Bolt';


// STYLED
const MenuItemStyled = styled(MenuItem)`
	border-bottom: 1px solid rgb(173 173 173 / 74%);

	padding-left: 5px;
`
const LogoutMenuItem = styled(MenuItem)`
	margin: 2px;
	padding-left: 5px;
`

const TypographyStyled = styled(Typography)`
	margin-left: 15px;
	margin-right: 10px;
`



const Profile = () => {
	const { loggedinUser, } = useContext(DataContext);
	const [menuOpen, setMenuOpen] = useState(false);

	const clickHandler = (event)=>{
		setMenuOpen(event.currentTarget);
	}

	const logoutHandler = ()=>{
		setMenuOpen(false);
	}


	return (
		<>

			<Box onClick={clickHandler}>
				<Typography style={{ marginTop: 3, marginRight: 40, fontWeight: 600, cursor: 'pointer', marginLeft: 20 }}>
					{capitalizeFirstLetter(loggedinUser.name)}
				</Typography>
			</Box>
			<Menu
				id="basic-menu"
				anchorEl={menuOpen}
				open={Boolean(menuOpen)}
				onClose={logoutHandler}
			>
				<MenuItemStyled >
					<AccountCircle color='primary' fontSize='12px' />
					<TypographyStyled fontSize={12}>My Profile</TypographyStyled>
				</MenuItemStyled>
				<MenuItemStyled >
					<BoltIcon color='primary' fontSize='12px' />
					<TypographyStyled fontSize={12}>SuperCoin Zone</TypographyStyled>
				</MenuItemStyled>
				<MenuItemStyled >
					<AccountBalanceWallet color='primary' fontSize='string' />
					<TypographyStyled fontSize={12}>Order</TypographyStyled>
				</MenuItemStyled>
				<MenuItemStyled >
					<FavoriteBorder color='primary' fontSize='12px' />
					<TypographyStyled fontSize={12}>Wishlist</TypographyStyled>
				</MenuItemStyled>
				<MenuItemStyled >
					<LocalActivity color='primary' fontSize='12px' />
					<TypographyStyled fontSize={12}>Coupons</TypographyStyled>
				</MenuItemStyled>
				<MenuItemStyled >
					<Notifications color='primary' fontSize='12px' />
					<TypographyStyled fontSize={12}>Notification</TypographyStyled>
				</MenuItemStyled>
				<LogoutMenuItem onClick={logoutHandler}>
					<AccountCircle color='primary' fontSize='12px' />
					<TypographyStyled fontSize={12}>Logout</TypographyStyled>
				</LogoutMenuItem>
			</Menu>
		</>
	)
}

export default Profile
