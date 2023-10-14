import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import "./style.scss";

import { RootState } from "../../store/reducers";
import { setCurrentTask } from "../../store/reducers/currentTask/actions";
import { TaskType } from "../../store/reducers/currentTask";
import { changeTask, deleteTask } from "../../store/reducers/projects/actions";
import { setShowCurrentTask } from "../../store/reducers/base/actions";

import CurrentTaskDates from "./components/dates";
import CurrentTaskProperties from "./components/properties";
import CurrentTaskTasks from "./components/subtasks";
import CurrentTaskComments from "./components/comments";

const CurrentTask: React.FC = () => {
    const [curTask, setcurTask] = React.useState<TaskType>();

    const currentTaskState = useSelector(
        (state: RootState) => state.currentTask.currentTask
    );

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    const projectId = searchParams.get("id");

    React.useEffect(() => {
        if (currentTaskState) setcurTask(currentTaskState);
    }, [currentTaskState]);

    const deleteCurrentTask = () => {
        if (projectId && curTask) {
            dispatch(deleteTask(+projectId, curTask.id));
            dispatch(setShowCurrentTask(false));
        }
        dispatch(setCurrentTask(null));
    };

    const changeTaskInputHandler = (
        e:
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLInputElement>,
        type: "text" | "file"
    ) => {
        if (curTask && projectId) {
            const newTask = { ...curTask };
            newTask[type] = e.target.value;
            dispatch(setCurrentTask(newTask));
            dispatch(changeTask(+projectId, newTask));
        }
    };

    const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (curTask && projectId) {
            const newTask = { ...curTask };
            newTask.name = e.target.value;
            dispatch(setCurrentTask(newTask));
            dispatch(changeTask(+projectId, newTask));
        }
    };

    return (
        <>
            {/* <div className="currentTask-bg"></div> */}
            <div className="currentTask" onClick={(e) => e.stopPropagation()}>
                <div className="currentTask__properties">
                    <input
                        placeholder="title"
                        onChange={(e) => titleChangeHandler(e)}
                        className="currentTask__title"
                        value={currentTaskState?.name}
                    />

                    <button
                        onClick={deleteCurrentTask}
                        className="currentTask__properties-btn red"
                    >
                        delete task
                    </button>
                </div>

                <textarea
                    className="currentTask-text"
                    value={currentTaskState?.text}
                    onChange={(e) => changeTaskInputHandler(e, "text")}
                ></textarea>

                <CurrentTaskDates />

                <CurrentTaskProperties />

                <input
                    type="file"
                    className="currentTask-file"
                    onChange={(e) => changeTaskInputHandler(e, "file")}
                />

                <CurrentTaskTasks />

                <CurrentTaskComments />
            </div>
        </>
    );
};

export default CurrentTask;
