// reducers/index.js
import { combineReducers } from "redux";

import currentTaskReducer from "./currentTask";
import projectsReducer from "./projects/index";
import baseStateReducer from "./base";

const rootReducer = combineReducers({
    currentTask: currentTaskReducer,
    projects: projectsReducer,
    base: baseStateReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
