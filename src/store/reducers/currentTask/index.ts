/* eslint-disable indent */

import { SETCURRENTTASK, AddCurrentTaskAction } from "./actions";

export interface subTaskType {
    id: number;
    order: number;
    text: string;
}

export interface taskCommentsType {
    id: number;
    date: number;
    author: string;
    text: string;
    subcomments: Array<taskCommentsType>;
}

export interface TaskType {
    id: number;
    order: number;
    text: string;
    name: string;
    startDate: number;
    endDate: number | null;
    col: "Done" | "Queue" | "Development";
    priority: "Immediately" | "Urgently";
    status: "Done" | "Process" | "Failed";
    file: string;
    tasks: Array<subTaskType>;
    comments: Array<taskCommentsType>;
}

interface currentTaskState {
    currentTask: TaskType | null;
}

const initialState: currentTaskState = {
    currentTask: null,
};

const currentTaskReducer = (
    state = initialState,
    action: AddCurrentTaskAction
): currentTaskState => {
    switch (action.type) {
        case SETCURRENTTASK:
            return { currentTask: action.payload };
        default:
            return state;
    }
};

export default currentTaskReducer;
