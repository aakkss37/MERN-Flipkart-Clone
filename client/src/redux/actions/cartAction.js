import * as actionType from '../constants/dispatchType.js'


export const addToCart = (product) => (dispatch)=>{
	dispatch({type: actionType.ADD_TO_CART, payload: product})
}

export const removeFromCart = (product_id) => (dispatch)=>{
	console.log(product_id);
	dispatch({ type: actionType.REMOVE_FROM_CART, payload: product_id })
}

export const cartCountIncrease = () => (dispatch)=>{
	dispatch({ type: actionType.COUNT_INCREASE,  })
}

export const cartCountDecrease= () => (dispatch)=>{
	dispatch({ type: actionType.COUNT_DECREASE,  })
}