import { TaskType } from "../currentTask/index";

import { ProjectType } from ".";

export const ADDPROJECT = "ADDPROJECT";
export const DELETEPROJECT = "DELETEPROJECT";
export const CHANGEPROJECTNAME = "CHANGEPROJECTNAME";
export const SETPROJECTS = "SETPROJECTS";
export const ADDTASK = "ADDTASK";
export const DELETETASK = "DELETETASK";
export const CHANGETASK = "CHANGETASK";
export const CHANGETASKS = "CHANGETASKS";

export interface ChangeProjectNameAction {
    type: typeof CHANGEPROJECTNAME;
    payload: {
        projectId: number;
        name: string;
    };
}

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

export interface SetTasksAction {
    type: typeof CHANGETASKS;
    payload: {
        projectId: number;
        tasks: Array<TaskType>;
    };
}

export const changeProjectName = (
    id: number,
    name: string
): ChangeProjectNameAction => ({
    type: CHANGEPROJECTNAME,
    payload: {
        projectId: id,
        name,
    },
});

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

export const setTasks = (
    projectId: number,
    tasks: Array<TaskType>
): SetTasksAction => ({
    type: CHANGETASKS,
    payload: { projectId, tasks },
});
