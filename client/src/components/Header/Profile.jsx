import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { DataContext } from '../../contextAPI/Dataprovider';

import { capitalizeFirstLetter } from '../../constant/modify';


const Profile = () => {
	const { loggedinUser } = useContext(DataContext)

	return (
		<Box>
			<Typography style={{ marginTop: 3, marginRight: 40, fontWeight: 600, cursor: 'pointer', marginLeft: 20 }}>
				{capitalizeFirstLetter(loggedinUser.name)}
			</Typography>
		</Box>
	)
}

export default Profile
