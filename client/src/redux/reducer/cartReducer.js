import * as actionType from "../constants/dispatchType.js";

export const cartReducer = (state = [], action) => {
	switch(action.type){
		case actionType.ADD_TO_CART:
			state = [...state, action.payload];
			return state;
		case actionType.REMOVE_FROM_CART:
			const index = state.indexOf(action.payload);
			index>-1 && state.splice(index, 1);
			return state
		default:
			return state;
	}
}

export const cartItemCountReducer = (state = 0, action) => {
	switch (action.type) {
		case actionType.COUNT_INCREASE:
			return state = state + 1;
		case actionType.COUNT_DECREASE:
			return state = state - 1;
		default:
			return state
	}
}