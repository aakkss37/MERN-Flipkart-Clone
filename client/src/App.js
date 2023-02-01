import { Box } from "@mui/material";
import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import DataProvider from "./contextAPI/Dataprovider";


function App() {
  return (
	<DataProvider>
		<Header/>
		<Box style={{marginTop: 55}}>
			<Home/>
		</Box>
	  </DataProvider>
  );
}

export default App;
