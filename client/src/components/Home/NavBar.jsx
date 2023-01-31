import React from 'react'
import { styled, Box } from '@mui/material'
import { navData } from '../../constant/data'



const Component = styled(Box)`
	display: flex;
	margin: 60px 140px 0 140px;
	justify-content: space-between;
`
const Conatiner = styled(Box)`
	padding: 12px 8px;
`


const NavBar = () => {

	return (
		<Component>
			{
				navData.map(data=>(
					<Conatiner>
						<img src={data.url} alt='img' style={{width: 64}}/>
						<p>{data.text}</p>
					</Conatiner>
				))
			}
		</Component>
	)
}

export default NavBar