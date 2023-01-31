import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from '@mui/material';

import { bannerData } from '../../constant/data';


const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};



// style
const Image = styled('img')({
	width: '100%',
	height: 280,
})



const Banner = () => {
	return (
		<Carousel
			swipeable={false} //user can not swipe manualy
			draggable={false} // can not drag
			responsive={responsive} //{compulsory}
			dotListClass="custom-dot-list-style" //{compulsory}
			itemClass="carousel-item-padding-40-px"//{compulsory}
			infinite={true} // slide infinite time
			autoPlay={true} // slide automatically 
			autoPlaySpeed={3000} // time gap per slide
			keyBoardControl={true}//{compulsory}
			slidesToSlide={1} // no. of element will be slided at one time
		>
			{
				bannerData.map(data => (
					<Image src={data.url} alt='banner' />
				))
			}
		</Carousel>
	)
}

export default Banner