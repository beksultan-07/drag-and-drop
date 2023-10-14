import { TaskType } from "../currentTask";

import { ProjectType, projectsStateType } from ".";

export const deleteProjectReducer = (
    state: projectsStateType,
    projcetId: number
): projectsStateType => {
    const newProjcets = state.projects.filter((el) => el.id !== projcetId);
    return {
        projects: newProjcets,
    };
};

export const changeTaskReducer = (
    state: projectsStateType,
    info: {
        projectId: number;
        task: TaskType;
    }
): projectsStateType => {
    const newProjcets = state.projects.map((project) => {
        if (project.id === info.projectId) {
            return {
                ...project,
                tasks: project.tasks.map((task) =>
                    task.id === info.task.id ? info.task : task
                ),
            };
        }
        return project;
    });
    return {
        projects: newProjcets,
    };
};

export const changeTasksReducer = (
    state: projectsStateType,
    info: {
        projectId: number;
        tasks: Array<TaskType>;
    }
): projectsStateType => {
    const newProjcets: Array<ProjectType> = state.projects.map((project) => {
        if (project.id === info.projectId) {
            return { ...project, tasks: info.tasks };
        }
        return project;
    });
    return {
        projects: newProjcets,
    };
};

export const deleteTaskReducer = (
    state: projectsStateType,
    info: {
        projectId: number;
        taskId: number;
    }
): projectsStateType => {
    const newProjcets = state.projects.map((project) => {
        if (project.id === info.projectId) {
            return {
                ...project,
                tasks: project.tasks.filter((task) => task.id !== info.taskId),
            };
        }
        return project;
    });
    return {
        projects: newProjcets,
    };
};

export const addTaskReducer = (
    state: projectsStateType,
    info: {
        projectId: number;
        task: TaskType;
    }
): projectsStateType => {
    const newProjcets = state.projects.map((project) => {
        if (project.id === info.projectId) {
            return {
                ...project,
                tasks: [...project.tasks, info.task],
            };
        }
        return project;
    });
    return {
        projects: newProjcets,
    };
};
