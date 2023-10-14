import React from "react";
import { useDispatch } from "react-redux";

import { TaskType } from "../../../../store/reducers/currentTask";
import TaskDraggable from "../task";
import { setCurrentTask } from "../../../../store/reducers/currentTask/actions";
import {
    addTask,
    changeTasks,
} from "../../../../store/reducers/projects/actions";

interface Props {
    tasks: Array<TaskType>;
    projectId: number;
    col: "Queue" | "Development" | "Done";
    onDropToCol: (col: "Queue" | "Development" | "Done") => void;
    currenTask: TaskType | null | undefined;
    setCurrenTask: React.Dispatch<
        React.SetStateAction<TaskType | null | undefined>
    >;
}

const TasksColumn: React.FC<Props> = ({
    tasks,
    projectId,
    col,
    currenTask,
    setCurrenTask,
    onDropToCol,
}) => {
    const dispatch = useDispatch();

    const onTaskClickHandler = (task: TaskType) => {
        dispatch(setCurrentTask(task));
        dispatch({ type: "SETSHOWCURRENTTASK", payload: true });
    };

    const onDragStartHandler = (
        e: React.DragEvent<HTMLLIElement>,
        task: TaskType
    ) => {
        setCurrenTask(task);
    };

    const onDropHandler = (
        e: React.DragEvent<HTMLLIElement>,
        task: TaskType
    ) => {
        e.preventDefault();
        const element = e.target as HTMLLIElement;
        if (currenTask) {
            const newTasks: Array<TaskType> = tasks.map((t) => {
                if (t.id === task.id) {
                    return {
                        ...t,
                        col: currenTask.col,
                        order: currenTask.order,
                    };
                }
                if (t.id === currenTask.id) {
                    return {
                        ...t,
                        order: task.order,
                        col: task.col,
                    };
                }
                return t;
            });

            dispatch(changeTasks(+projectId, newTasks));
            setCurrenTask(null);
        }

        element.style.background = "#fff";
    };

    const addNewTaskHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (projectId) {
            const newTask: TaskType = {
                col,
                name: "new task",
                endDate: null,
                file: "",
                text: "",
                id: tasks.length + 1,
                order: tasks.length + 1,
                priority: "Urgently",
                status: "Process",
                startDate: new Date().getTime(),
                tasks: [],
                comments: [],
            };
            dispatch(addTask(+projectId, newTask));
            dispatch(setCurrentTask(newTask));
        }
    };

    const sortTasks = (a: TaskType, b: TaskType) => {
        if (a.order > b.order) return 1;
        return -1;
    };
    return (
        <>
            <ul
                className="tasks__col__list"
                draggable={true}
                onDrop={() => onDropToCol(col)}
            >
                {tasks
                    .sort(sortTasks)
                    .map((el) =>
                        el.col === col ? (
                            <TaskDraggable
                                key={el.id}
                                task={el}
                                onDragStartHandler={onDragStartHandler}
                                onDropHandler={onDropHandler}
                                onClick={onTaskClickHandler}
                            />
                        ) : null
                    )}
            </ul>
            <button
                className="tasks__col-btn btn"
                onClick={(e) => addNewTaskHandler(e)}
            >
                Add task
            </button>
        </>
    );
};

export default TasksColumn;
