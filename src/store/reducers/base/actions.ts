export const SETNAME = "SETNAME";
export const SETSHOWCURRENTTASK = "SETSHOWCURRENTTASK";
export const SETSEARCHINPUT = "SETSEARCHINPUT";

export interface SetNameAction {
    type: typeof SETNAME;
    payload: string;
}

export interface SetShowCurrentTaskAction {
    type: typeof SETSHOWCURRENTTASK;
    payload: boolean;
}

export interface setSearchInputAction {
    type: typeof SETSEARCHINPUT;
    payload: string;
}

export const setUserName = (name: string): SetNameAction => ({
    type: SETNAME,
    payload: name,
});

export const setShowCurrentTask = (
    visibility: boolean
): SetShowCurrentTaskAction => ({
    type: SETSHOWCURRENTTASK,
    payload: visibility,
});

export const setSearchValue = (value: string): setSearchInputAction => ({
    type: SETSEARCHINPUT,
    payload: value,
});
