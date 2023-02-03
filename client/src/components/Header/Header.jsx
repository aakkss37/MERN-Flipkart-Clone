import React from 'react'

// MUI
import { styled, AppBar, Toolbar, Box, Typography } from '@mui/material'

// COMPONENTS
import Search from './Search';
import CustomButtons from './CustomButtons';
import { useNavigate } from 'react-router-dom';



const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
	width: 100%;
`;
const Component = styled(Box)(({theme})=>({
    marginLeft: '10%',
    lineHeight: 0,
    color: '#FFFFFF',
    textDecoration: 'none',
	cursor: 'pointer',
	[theme.breakpoints.down('md')]: {
		margin: '5px',
	}
}))

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
	&:hover{
		cursor: pointer;
		text-decoration: underline;
		text-decoration-color: #FFE500;
	}
`
const PlusImage = styled('img')({
	width: 10,
	height: 10,
	marginLeft: 4
})

// const CustomButtonWrapper =(Box)`
// 	 margin-left: 5%;
// `


const Header = () => {

	const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
	const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

	const navigate = useNavigate()


	return (
		<StyledHeader>
			<Toolbar style={{minHeight: 55}}>

				<Component onClick={() => navigate('/')} >
					<img src={logoURL} alt="logo" style={{ width: 75 }} />
					<Box style={{display: 'flex'}}>
						<SubHeading>Explore <Box component="span" style={{color: '#FFE500', fontWeight: 800, fontSize: 11 }} >Plus</Box></SubHeading>
						<PlusImage src={subURL} alt="plus"/>
					</Box>
				</Component>

				<Search/>

				<Box style={{margin: '0 5% 0 auto'}}>
					<CustomButtons/>
				</Box>



			</Toolbar>
		</StyledHeader>
	)
}

export default Header
