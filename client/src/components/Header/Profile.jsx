import React, { useContext, useState } from 'react';
import { Box, Menu, MenuItem, Typography } from '@mui/material';
import { DataContext } from '../../contextAPI/Dataprovider';

import { capitalizeFirstLetter } from '../../constant/modify';


const Profile = () => {
	const { loggedinUser, setLoggedinUser } = useContext(DataContext);
	const [menuOpen, setMenuOpen] = useState(false);

	const clickHandler = (event)=>{
		setMenuOpen(event.currentTarget);
	}

	const logoutHandler = ()=>{
		setMenuOpen(false);
		setLoggedinUser({});
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
				<MenuItem >Profile</MenuItem>
				<MenuItem >My account</MenuItem>
				<MenuItem onClick={logoutHandler}>Logout</MenuItem>
			</Menu>
		</>
	)
}

export default Profile
