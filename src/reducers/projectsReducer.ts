import { Reducer } from "redux";

import data from "../data";

import {
    FILTER,
} from "../constants/actionTypes";

type ProjectProp = {
    name: string,
    image?: string
}

export type ProjectsType = {
    listProjects: Array<ProjectProp>,
    filteredProjects: Array<ProjectProp>,
    textFilter: string
}

const initialState: ProjectsType = {
	listProjects: data,
    filteredProjects: [],
    textFilter: ""
};

type actionType = {
    type: string,
    payload: {
        text: string
    }
};

const projectReducer: Reducer<ProjectsType, actionType> = (state = initialState, action: actionType) => {
	switch (action.type) {
		case FILTER:
            Object.assign({}, state, {
				textFilter: action.payload.text
            });

            let filtered = initialState.listProjects.filter(item => {
                return item.name.toLowerCase().includes(action.payload.text.toLowerCase());
            });

			return Object.assign({}, state, {
				filteredProjects: filtered
            });
		default:
			return state;
	}
}

export default projectReducer;