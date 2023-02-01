import { createContext, useState } from "react";

export const DataContext = createContext(null);





const DataProvider = (props)=>{
	const [loggedinUser, setLoggedinUser] = useState({})

	return(
		<DataContext.Provider value={{
			loggedinUser, setLoggedinUser
		}}>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataProvider;