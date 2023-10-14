import { TaskType } from ".";

export const SETCURRENTTASK = "SETCURRENTTASK";

export interface AddCurrentTaskAction {
    type: typeof SETCURRENTTASK;
    payload: TaskType | null;
}

export const setCurrentTask = (task: TaskType | null) => ({
    type: SETCURRENTTASK,
    payload: task,
});
