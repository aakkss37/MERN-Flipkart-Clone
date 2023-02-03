// TECHNIQUALLY IT IS NOT SLIDE.. ACTUALLY IT IS CALL "CAROUSEL"
import React from 'react';
import Countdown from 'react-countdown';
import Adds from './Adds';

// CAROUSEL
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// MUI
import { styled, Box, Typography, Button, Divider } from '@mui/material';


// STYLING
const Component = styled(Box)`
    margin-top: 10px;
    background: #FFFFFF;
	display: flex;
`;

const LeftComponent = styled(Box)(({ theme }) => ({
	width: '83%',
	[theme.breakpoints.down('md')]: {
		width: '100%'
	}
}))
const RightComponent = styled(Box)(({ theme }) => ({
	marginTop: 10,
	background: '#FFFFFF',
	width: '17%',
	marginLeft: 10,
	padding: 5,
	textAlign: 'center',
	[theme.breakpoints.down('md')]: {
		display: 'none'
	}
}));

const Deal = styled(Box)`
    display: flex;    
    padding: 15px 20px;
`

const DealText = styled(Typography)(({theme})=>({
    fontSize: '22px',
    fontWeight: 600,
    lineHeight: '32px',
    marginRight: '25px',
	[theme.breakpoints.down('sm')]:{
		fontSize: '18px',
		marginRight: '5px',
	}
}))


const Timer = styled(Box)`
    color: #7f7f7f;
    margin-left: 10px;
    display: flex;
    align-items: center;
`;

const ViewAllButton = styled(Button)(({ theme }) => ({
    marginLeft: 'auto',
    backgroundColor: '#2874f0',
    borderRadius: '2px',
    fontSize: '13px',
	fontWeight: 600,
	[theme.breakpoints.down('sm')]: {
		fontSize: '12px',
		padding: '4px',
	}
}))

const Image = styled('img')({
	width: 'auto',
	height: 150,
})

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px
`




const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 5
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 5
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};


const Slide = (props) => {
	const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
	const renderer = ({ hours, minutes, seconds }) => {
		return <Box variant="span">{hours} : {minutes} : {seconds}  Left</Box>;
	};

	return (
		<Component>
			<LeftComponent>
				<Deal>
					<DealText>{props.title}</DealText>
					{
						props.timer &&
						<Timer>
							<img src={timerURL} alt='timer' style={{ width: 24 }} />
							<Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
						</Timer>
					}
					<ViewAllButton variant='contained'>View All</ViewAllButton>
				</Deal>

				<Divider /> {/* draw a horizontal line... replacement of <hr/> tag of html */}



				<Carousel
					swipeable={false} //user can not swipe manualy
					draggable={false} // can not drag
					responsive={responsive} //{compulsory}
					dotListClass="custom-dot-list-style" //{compulsory}
					itemClass="carousel-item-padding-40-px"//{compulsory}
					infinite={true} // slide infinite time
					autoPlay={false} // slide automatically 
					autoPlaySpeed={3000} // time gap per slide
					keyBoardControl={true}//{compulsory}
					slidesToSlide={1} // no. of element will be slided at one time
					centerMode={true}
				>

					{
						props.products.map(product => (
							<Box textAlign="center" style={{ padding: '25px 15px', cursor: "pointer", }}>
								<Image src={product.url} alt="img" />
								<Text style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Text>
								<Text style={{ color: 'green' }}>{product.discount}</Text>
								<Text style={{ color: '#212121', opacity: '.6' }}>{product.tagline}</Text>
							</Box>
						))
					}

				</Carousel>


			</LeftComponent>
			<RightComponent>
				<Adds />
			</RightComponent>
		</Component>
	)
}

export default Slide
