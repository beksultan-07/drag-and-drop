/* eslint-disable indent */

import { TaskType } from "../currentTask";

import {
    ADDTASK,
    AddTaskAction,
    ChangeTaskAction,
    DeleteTaskAction,
    SETPROJECTS,
    DELETETASK,
    CHANGETASK,
    SetProjectsAction,
    CHANGETASKS,
    ChangeTasksAction,
    AddProjectAction,
    ADDPROJECT,
    DELETEPROJECT,
    DeleteProjectAction,
} from "./actions";
import {
    addTaskReducer,
    changeTaskReducer,
    changeTasksReducer,
    deleteProjectReducer,
    deleteTaskReducer,
} from "./reducers";

export interface ProjectType {
    id: number;
    name: string;
    tasks: Array<TaskType>;
}

export interface projectsStateType {
    projects: Array<ProjectType>;
}

const initialState: projectsStateType = {
    projects: [],
};

const projectsReducer = (
    state = initialState,
    action:
        | AddProjectAction
        | DeleteProjectAction
        | AddTaskAction
        | DeleteTaskAction
        | SetProjectsAction
        | ChangeTaskAction
        | ChangeTasksAction
): projectsStateType => {
    switch (action.type) {
        case ADDTASK:
            return addTaskReducer(state, action.payload);
        case SETPROJECTS:
            return { projects: action.payload };
        case DELETETASK:
            return deleteTaskReducer(state, action.payload);
        case ADDPROJECT:
            return { projects: [...state.projects, action.payload] };
        case DELETEPROJECT:
            return deleteProjectReducer(state, action.payload);
        case CHANGETASK:
            return changeTaskReducer(state, action.payload);
        case CHANGETASKS:
            return changeTasksReducer(state, action.payload);
        default:
            return state;
    }
};

export default projectsReducer;
