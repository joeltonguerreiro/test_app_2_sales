import { Reducer } from "redux";

import {
    SIGN_IN,
    SIGN_OUT
} from "../constants/actionTypes";

type iAuthState = {
    isAuthenticated: Boolean
}

const initialState: iAuthState = {
	isAuthenticated: false
};

type actionType = {
    type: string
};

const authReducer: Reducer<iAuthState, actionType> = (state = initialState, action: actionType) => {
	switch (action.type) {
		case SIGN_IN:
			return Object.assign({}, state, {
				isAuthenticated: true
            });
		case SIGN_OUT:
			return Object.assign({}, state, {
				isAuthenticated: false
			});
		default:
			return state;
	}
}

export default authReducer;