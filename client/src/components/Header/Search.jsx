import React from 'react'
import { styled, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding-top: 2px;
`;
const InputSearchBase = styled(InputBase)(({ theme }) => ({
	fontSize: 'unset',
	width: '100%',
	paddingLeft: '20px',
	[theme.breakpoints.down('md')]: {
		display: 'none'
	}
}))

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;


const Search = () => {
	return (
		<SearchContainer>
			<InputSearchBase placeholder='Search for product, brand and more' />
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
		</SearchContainer>
	)
}


export default Search