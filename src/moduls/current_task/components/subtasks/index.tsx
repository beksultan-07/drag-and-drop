import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { RootState } from "../../../../store/reducers";
import { TaskType, subTaskType } from "../../../../store/reducers/currentTask";
import { setCurrentTask } from "../../../../store/reducers/currentTask/actions";
import { changeTask } from "../../../../store/reducers/projects/actions";

const CurrentTaskTasks: React.FC = () => {
    const [currentTask, setCurrentTaskS] = useState<subTaskType>();
    const [newTaskInput, setNewTaskInput] = useState<string>("");

    const currentTasks = useSelector(
        (state: RootState) => state.currentTask.currentTask
    );

    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    const projectId = searchParams.get("id");

    const addTaskHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (currentTasks && projectId) {
            const newSubTask: subTaskType = {
                id: new Date().getTime(),
                text: newTaskInput,
                order: currentTasks.tasks.length,
            };
            const newTask: TaskType = {
                ...currentTasks,
                tasks: [...currentTasks.tasks, newSubTask],
            };

            dispatch(setCurrentTask(newTask));
            dispatch(changeTask(+projectId, newTask));
            setNewTaskInput("");
        }
    };

    const deleteTaskHandler = (task: subTaskType) => {
        if (currentTasks && projectId) {
            const newTask: TaskType = {
                ...currentTasks,
                tasks: currentTasks.tasks.filter((el) => el.id !== task.id),
            };

            dispatch(setCurrentTask(newTask));
            dispatch(changeTask(+projectId, newTask));
        }
    };

    const onDragLeaveHandler = (e: React.DragEvent<HTMLLIElement>) => {
        const element = e.target as HTMLLIElement;
        element.style.background = "#fff";
    };
    const onDragOver = (e: React.DragEvent<HTMLLIElement>) => {
        e.preventDefault();
        const element = e.target as HTMLLIElement;
        element.style.background = "#bebebe";
    };

    const onDragStartHandler = (
        e: React.DragEvent<HTMLLIElement>,
        card: subTaskType
    ) => {
        setCurrentTaskS(card);
    };

    const onDropHandler = (
        e: React.DragEvent<HTMLLIElement>,
        card: subTaskType
    ) => {
        e.preventDefault();
        const element = e.target as HTMLLIElement;
        if (currentTasks && currentTask && projectId) {
            const newTask: TaskType = {
                ...currentTasks,
                tasks: currentTasks.tasks.map((c) => {
                    if (c.id === card.id) {
                        return { ...c, order: currentTask.order || 0 };
                    }
                    if (c.id === currentTask.id) {
                        return { ...c, order: card.order };
                    }
                    return c;
                }),
            };

            dispatch(setCurrentTask(newTask));
            dispatch(changeTask(+projectId, newTask));
        }
        element.style.background = "#fff";
    };

    const sortTasks = (a: subTaskType, b: subTaskType) => {
        return a.order > b.order ? 1 : -1;
    };

    return (
        <ul className="currentTask__tasks">
            {currentTasks?.tasks.sort(sortTasks).map((task) => (
                <li
                    key={task.id}
                    className="currentTask__tasks__task"
                    draggable={true}
                    onDragStart={(e) => onDragStartHandler(e, task)}
                    onDragLeave={(e) => onDragLeaveHandler(e)}
                    onDragOver={(e) => onDragOver(e)}
                    onDrop={(e) => onDropHandler(e, task)}
                >
                    <span className="currentTask__tasks__task-text">
                        {task.text}
                    </span>
                    <button
                        className="currentTask__tasks__task-delete"
                        onClick={() => deleteTaskHandler(task)}
                    >
                        &#x2715;
                    </button>
                </li>
            ))}

            <form
                action="#"
                className="currentTask__comments__form"
                onSubmit={(e) => addTaskHandler(e)}
            >
                <input
                    placeholder="task"
                    type="text"
                    value={newTaskInput}
                    className="currentTask__comments__form-input"
                    onChange={(e) => setNewTaskInput(e.target.value)}
                />
                <button className="currentTask__comments__form-btn">
                    Send
                </button>
            </form>
        </ul>
    );
};

export default CurrentTaskTasks;
