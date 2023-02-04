import React from 'react'
import { useState, useEffect } from 'react';

import { Box, Typography, styled } from '@mui/material';

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 16px;
    }
`;

const Price = styled(Typography)`
    float: right;
`;

const TotalAmount = styled(Typography)`
    font-size: 20px;
    font-weight: 600;
    border-top: 1px dashed #e0e0e0;
    padding: 20px 0;
    border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
    font-size: 16px; 
    color: green;
`

// component: {
//     // width: '30%'
// },


const TotalView = ({ cartItems }) => {
	const [mrp, setMrp] = useState(0);
	const [discount, setDiscount] = useState(0);

	useEffect(() => {
		billing();
	}, [cartItems])
	// console.log('totalbill ----------------->',cartItems)
	const billing = () => {
		let totalMRP = 0, totalDiscount = 0;

		cartItems.forEach(item => {
			totalMRP += item.price.mrp;
			totalDiscount += item.price.mrp - item.price.cost;
		})
		setMrp(totalMRP);
		setDiscount(totalDiscount);
	}

	// console.log(cartItems)
	return (
		<Box style={{ margin: '4px', border: '1px solid #f0f0f0' }}>
			<Header>
				<Heading>PRICE DETAILS</Heading>
			</Header>
			<Container>
				<Typography>Price ({cartItems.length} item)
					<Price component="span">₹{mrp}</Price>
				</Typography>
				<Typography>Discount
					<Price component="span">-₹{discount}</Price>
				</Typography>
				<Typography>Delivery Charges
					<Price component="span">₹40</Price>
				</Typography>
				<TotalAmount>Total Amount
					<Price>₹{mrp - discount}</Price>
				</TotalAmount>
				<Discount>You will save <b>₹{discount}</b> on this order</Discount>
			</Container>
		</Box>
	)
}

export default TotalView;