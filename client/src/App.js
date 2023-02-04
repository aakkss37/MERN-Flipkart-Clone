import { Box } from "@mui/material";
import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import DataProvider from "./contextAPI/Dataprovider";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailView from "./components/details/DetailView";
import Cart from "./components/cart/Cart";



function App () {
	return (
		<DataProvider>
			<BrowserRouter>
				<Header />
				<Box style={{ marginTop: 55 }}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/product/detail' element={<DetailView />} />
						<Route path='/cart' element={<Cart/>} />
					</Routes>
				</Box>
			</BrowserRouter >
		</DataProvider>
	);
}

export default App;
