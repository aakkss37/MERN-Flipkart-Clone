import React from 'react'

// MUI
import { styled, AppBar, Toolbar, Box, Typography } from '@mui/material'

// COMPONENTS
import Search from './Search';
import CustomButtons from './CustomButtons';



const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;
const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
`;
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`
const PlusImage = styled('img')({
	width: 10,
	height: 10,
	marginLeft: 4
})




const Header = () => {

	const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
	const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


	return (
		<StyledHeader>
			<Toolbar style={{minHeight: 55}}>

				<Component>
					<img src={logoURL} alt="logo" style={{ width: 75 }} />
					<Box style={{display: 'flex'}}>
						<SubHeading>Explore <Box component="span" style={{color: '#FFE500'}} >Plus</Box></SubHeading>
						<PlusImage src={subURL} alt="plus"/>
					</Box>
				</Component>

				<Search/>
				<Box>
					<CustomButtons/>
				</Box>



			</Toolbar>
		</StyledHeader>
	)
}

export default Header
