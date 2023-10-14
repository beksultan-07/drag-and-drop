import { TaskType } from "../currentTask/index";

import { ProjectType } from ".";

export const ADDPROJECT = "ADDPROJECT";
export const DELETEPROJECT = "DELETEPROJECT";
export const SETPROJECTS = "SETPROJECTS";
export const ADDTASK = "ADDTASK";
export const DELETETASK = "DELETETASK";
export const CHANGETASK = "CHANGETASK";
export const CHANGETASKS = "CHANGETASKS";

export interface AddProjectAction {
    type: typeof ADDPROJECT;
    payload: ProjectType;
}

export interface DeleteProjectAction {
    type: typeof DELETEPROJECT;
    payload: number;
}

export interface AddTaskAction {
    type: typeof ADDTASK;
    payload: {
        projectId: number;
        task: TaskType;
    };
}

export interface DeleteTaskAction {
    type: typeof DELETETASK;
    payload: {
        projectId: number;
        taskId: number;
    };
}

export interface SetProjectsAction {
    type: typeof SETPROJECTS;
    payload: Array<ProjectType>;
}

export interface ChangeTaskAction {
    type: typeof CHANGETASK;
    payload: {
        projectId: number;
        task: TaskType;
    };
}

export interface ChangeTasksAction {
    type: typeof CHANGETASKS;
    payload: {
        projectId: number;
        tasks: Array<TaskType>;
    };
}

export const addTask = (projectId: number, task: TaskType): AddTaskAction => ({
    type: ADDTASK,
    payload: { projectId, task },
});

export const deleteTask = (
    projectId: number,
    taskId: number
): DeleteTaskAction => ({
    type: DELETETASK,
    payload: { projectId, taskId },
});

export const setProjects = (
    projects: Array<ProjectType>
): SetProjectsAction => ({
    type: SETPROJECTS,
    payload: projects,
});

export const addProjcet = (project: ProjectType): AddProjectAction => ({
    type: ADDPROJECT,
    payload: project,
});

export const deleteProject = (projectId: number): DeleteProjectAction => ({
    type: DELETEPROJECT,
    payload: projectId,
});

export const changeTask = (
    projectId: number,
    task: TaskType
): ChangeTaskAction => ({
    type: CHANGETASK,
    payload: { projectId, task },
});

export const changeTasks = (
    projectId: number,
    tasks: Array<TaskType>
): ChangeTasksAction => ({
    type: CHANGETASKS,
    payload: { projectId, tasks },
});
