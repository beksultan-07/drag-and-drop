export const SETNAME = "SETNAME";
export const SETSHOWCURRENTTASK = "SETSHOWCURRENTTASK";

export interface SetNameAction {
    type: typeof SETNAME;
    payload: string;
}

export interface SetShowCurrentTaskAction {
    type: typeof SETSHOWCURRENTTASK;
    payload: boolean;
}
