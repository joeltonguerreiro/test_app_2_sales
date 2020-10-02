import { combineReducers } from "redux";
import auth from "./authReducer";
import projects from "./projectsReducer";

const rootReducer = combineReducers({
	auth,
	projects
});

export default rootReducer;