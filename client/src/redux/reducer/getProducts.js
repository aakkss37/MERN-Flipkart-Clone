import * as actionType from "../constants/dispatchType.js";


export const getProductsReducer = (state = {products: []}, action)=>{
	switch (action.type) {
		case actionType.GET_PRODUCTS_SUCESS:
			return {products: action.payload}

		case actionType.GET_PRODUCTS_FALI:
			return { products: action.payload }
		
		default:
			return state;
	}
}