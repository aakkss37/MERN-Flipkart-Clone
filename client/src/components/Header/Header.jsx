import React, {useState} from 'react';

// MUI
import { styled, AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { ShoppingCart } from '@mui/icons-material';
import { AccountCircle, AccountBalanceWallet, FavoriteBorder, LocalActivity, Notifications } from '@mui/icons-material';
import BoltIcon from '@mui/icons-material/Bolt';

// COMPONENTS
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link, useNavigate } from 'react-router-dom';



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

const MenuButton = styled(IconButton)(({ theme }) => ({
	display: 'none',
	[theme.breakpoints.down('sm')]: {
		display: 'block'
	}
}));

const CustomButtonWrapper = styled('span')(({ theme }) => ({
	margin: '0 5% 0 auto',
	[theme.breakpoints.down('sm')]: {
		display: 'none'
	}
}));
const Container = styled(Link)(({ theme }) => ({
	float: 'right',
	marginLeft: 'auto',
	display: 'none',
	color: 'white',
	[theme.breakpoints.down('sm')]: {
		display: 'block',
	}
}));


const menuList = [
	{ text: 'My Profile', icon: <AccountCircle color='primary' style={{fontSize: '22px'}} /> },
	{ text: 'SuperCoin Zone', icon: <BoltIcon color='primary' style={{fontSize: '22px'}} /> },
	{ text: 'Order', icon: <AccountBalanceWallet color='primary' style={{fontSize: '22px'}} /> },
	{ text: 'Wishlist', icon: <FavoriteBorder color='primary' style={{fontSize: '22px'}} /> },
	{ text: 'Coupons', icon: <LocalActivity color='primary' style={{fontSize: '22px'}} /> },
	{ text: 'Notification', icon: <Notifications color='primary' style={{fontSize: '22px'}} /> },
	{ text: 'Logout', icon: <AccountCircle color='primary' style={{fontSize: '22px'}} /> },
]
const list = () => (
		<List style={{ width: 250 }}>
			{menuList.map((item) => (
				<ListItem key={item.text} disablePadding >
					<ListItemButton>
						<ListItemIcon>
							{item.icon}
						</ListItemIcon>
						<ListItemText primary={item.text} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
);






const Header = () => {

	const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
	const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
	const [isOpen, setIsOpen] = useState(false)


	const navigate = useNavigate()


	

	return (
		<StyledHeader>
			<Toolbar style={{minHeight: 55}}>

				<MenuButton color="inherit" >
					<MenuIcon onClick={()=> setIsOpen(true)}/>
				</MenuButton>
				<Drawer open={isOpen}  onClose={()=>{setIsOpen(false)}} >
					{list()}
				</Drawer>


				<Component onClick={() => navigate('/')} >
					<img src={logoURL} alt="logo" style={{ width: 75 }} />
					<Box style={{display: 'flex'}}>
						<SubHeading>Explore <Box component="span" style={{color: '#FFE500', fontWeight: 800, fontSize: 11 }} >Plus</Box></SubHeading>
						<PlusImage src={subURL} alt="plus"/>
					</Box>
				</Component>

				<Search/>


				<Container to={'/cart'}>
					<ShoppingCart />
				</Container>

				<CustomButtonWrapper style={{margin: '0 5% 0 auto'}}>
					<CustomButtons/>
				</CustomButtonWrapper>



			</Toolbar>
		</StyledHeader>
	)
}

export default Header
