/* eslint-disable indent */

import {
    SETNAME,
    SETSHOWCURRENTTASK,
    SetNameAction,
    SetShowCurrentTaskAction,
} from "./actions";

export interface baseStateType {
    name: string;
    showCurrentTask: boolean;
}

const initialState: baseStateType = {
    name: "some name",
    showCurrentTask: false,
};

const baseStateReducer = (
    state = initialState,
    action: SetNameAction | SetShowCurrentTaskAction
): baseStateType => {
    switch (action.type) {
        case SETNAME:
            return { ...state, name: action.payload };
        case SETSHOWCURRENTTASK:
            return { ...state, showCurrentTask: action.payload };
        default:
            return state;
    }
};

export default baseStateReducer;
