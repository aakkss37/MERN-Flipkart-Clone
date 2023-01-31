import React, { Fragment } from 'react'
import { Box, styled } from '@mui/material'

// COMPONENTS
import Banner from './Banner'
import NavBar from './NavBar'


// STYLE
const Component = styled(Box)`
	padding: 8px;
	background: #f2f2f2
`


const Home = () => {
	return (
		<>
			<NavBar />
			<Component>
				<Banner />
			</Component>
		</>
	)
}

export default Home