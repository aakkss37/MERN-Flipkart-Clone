import React, { useState } from 'react'
import { styled, InputBase, Box, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';



const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 35%;
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
const ListWrapper = styled(List)`
	position: absolute;
	background: #FFF;
	color: #000;
	margin-top: 320px;

`

const Search = () => {
	const [searchText, setSearchText] = useState('')
	const getProduct = useSelector(state => state.getProducts)
	const { products } = getProduct

	const onSearchItem = (e) => {
		setSearchText(e.target.value)
	}

	// console.log(searchText)
	// console.log('sreatc===> ' ,products);

	return (
		<SearchContainer>
			<InputSearchBase
				placeholder='Search for product, brand and more'
				onChange={onSearchItem}
			/>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>

			{
				searchText &&
					<ListWrapper>
						{
							products.filter(product => product.title.longTitle.toLowerCase().includes(searchText.toLowerCase()))
								.map(product => (
									<ListItem>
										<Link 	to={`product/detail/?product_id=${product._id}`} 
												style={{textDecoration: 'none', color: '#000'}}
												onClick={()=> setSearchText('')}>
											{product.title.longTitle}
										</Link>
									</ListItem>
								))
						}
					</ListWrapper>
			}

		</SearchContainer>
	)
}


export default Search