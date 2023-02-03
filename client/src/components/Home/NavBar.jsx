import React from 'react'
import { styled, Box, Typography } from '@mui/material'
import { navData } from '../../constant/data'



const Component = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	margin: '55px 130px 0 130px !important',
	overflowX: 'overlay',
	[theme.breakpoints.down('lg')]: {
		margin: '0px !important'
	}
}))
const Conatiner = styled(Box)`
	padding: 12px 8px;
	text-align: center;
`
const Text = styled(Typography)`
	font-size: 13px;
	font-weight: 600;
`


const NavBar = () => {

	return (
		<Component>
			{
				navData.map(data=>(
					<Conatiner>
						<img src={data.url} alt='img' style={{width: 64}}/>
						<Text>{data.text}</Text>
					</Conatiner>
				))
			}
		</Component>
	)
}

export default NavBar