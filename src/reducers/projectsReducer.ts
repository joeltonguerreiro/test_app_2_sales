import { Reducer } from "redux";

import data from "../data";

import {
    FILTER,
} from "../constants/actionTypes";

type ProjectProp = {
    name: string,
    image?: string
}

type iProjectsState = {
    listProjects: Array<ProjectProp>,
    filteredProjects: Array<ProjectProp>
}

const initialState: iProjectsState = {
	listProjects: data,
    filteredProjects: []
};

type actionType = {
    type: string,
    payload: {
        text: string
    }
};

const projectReducer: Reducer<iProjectsState, actionType> = (state = initialState, action: actionType) => {
	switch (action.type) {
		case FILTER:
            let filtered = initialState.listProjects.filter(item => {
                console.log('item', item.name);
                console.log('text', action.payload.text);

                return item.name.includes(action.payload.text);
            });

			return Object.assign({}, state, {
				filteredProjects: filtered
            });
		default:
			return state;
	}
}

export default projectReducer;