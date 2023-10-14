/* eslint-disable indent */

import {
    SETNAME,
    SETSEARCHINPUT,
    SETSHOWCURRENTTASK,
    SetNameAction,
    SetShowCurrentTaskAction,
    setSearchInputAction,
} from "./actions";

export interface baseStateType {
    name: string;
    showCurrentTask: boolean;
    searchValue: string;
}

const initialState: baseStateType = {
    name: "some name",
    showCurrentTask: false,
    searchValue: "",
};

const baseStateReducer = (
    state = initialState,
    action: SetNameAction | SetShowCurrentTaskAction | setSearchInputAction
): baseStateType => {
    switch (action.type) {
        case SETNAME:
            return { ...state, name: action.payload };
        case SETSHOWCURRENTTASK:
            return { ...state, showCurrentTask: action.payload };
        case SETSEARCHINPUT:
            return { ...state, searchValue: action.payload };
        default:
            return state;
    }
};

export default baseStateReducer;
