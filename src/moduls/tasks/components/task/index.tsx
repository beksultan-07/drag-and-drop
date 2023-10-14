import React from "react";

import { TaskType } from "../../../../store/reducers/currentTask";

type Prop = {
    task: TaskType;
    onDragStartHandler: (
        e: React.DragEvent<HTMLLIElement>,
        task: TaskType
    ) => void;
    onDropHandler: (e: React.DragEvent<HTMLLIElement>, task: TaskType) => void;
    onClick: (task: TaskType) => void;
};

const TaskDraggable: React.FC<Prop> = ({
    task,
    onDragStartHandler,
    onDropHandler,
    onClick,
}) => {
    const onDragLeaveHandler = (e: React.DragEvent<HTMLLIElement>) => {
        const element = e.target as HTMLLIElement;
        element.style.background = "#fff";
    };
    const onDragOver = (e: React.DragEvent<HTMLLIElement>) => {
        e.preventDefault();
        const element = e.target as HTMLLIElement;
        element.style.background = "#bebebe";
    };

    const onClickHandler = (
        e: React.MouseEvent<HTMLLIElement, MouseEvent>,
        task: TaskType
    ) => {
        e.stopPropagation();
        onClick(task);
    };
    return (
        <li
            className="tasks__col__list__item"
            draggable={true}
            onDragStart={(e) => onDragStartHandler(e, task)}
            onDragLeave={(e) => onDragLeaveHandler(e)}
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDropHandler(e, task)}
            onClick={(e) => onClickHandler(e, task)}
        >
            <button className="tasks__col__list__item-btn">
                {task.id}. {task.name}
            </button>
        </li>
    );
};

export default TaskDraggable;
