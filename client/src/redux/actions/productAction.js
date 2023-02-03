import { API } from "../../service/api"
import * as actionType from "../constants/dispatchType.js";


export const getProducts = () => async (dispatch) => {
	try {
	//  const responce = await API.getProducts(); ===> responce is an object.. to get access of any of the field of this object.. we can use .(dot) operator.. OR obj de-structuring
		const {data} = await API.getProducts() //--> "Object De-structuring" same as 'ressponce.data' of above line
		// console.log("API call responce ==> ",data);
		dispatch({ type: actionType.GET_PRODUCTS_SUCESS, payload: data })
	} catch (error) {
		dispatch({ type: actionType.GET_PRODUCTS_FALI, payload: error.message })
	}
}

