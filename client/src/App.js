import { Box } from "@mui/material";
import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";


function App() {
  return (
	<div>
		<Header/>
		<Box style={{marginTop: 55}}>
			<Home/>
		</Box>
	</div>
  );
}

export default App;
