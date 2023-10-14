/* eslint-disable indent */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { RootState } from "../../../../store/reducers";
import { setCurrentTask } from "../../../../store/reducers/currentTask/actions";
import { changeTask } from "../../../../store/reducers/projects/actions";

const CurrentTaskProperties = () => {
    const [statusShow, setStatusShow] = React.useState(false);
    const [priorityShow, setPriorityShow] = React.useState(false);

    const currentTask = useSelector(
        (state: RootState) => state.currentTask.currentTask
    );

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const projectId = searchParams.get("id");

    React.useEffect(() => {
        return window.addEventListener("click", () => {
            setStatusShow(false);
            setPriorityShow(false);
        });
    }, []);

    const onPriorityClickHandler = (priority: "Immediately" | "Urgently") => {
        setPriorityShow(false);

        if (currentTask && projectId) {
            const newTask = { ...currentTask };
            newTask.priority = priority;
            dispatch(setCurrentTask(newTask));
            dispatch(changeTask(+projectId, newTask));
        }
    };

    const onStatusClickHandler = (status: "Done" | "Failed" | "Process") => {
        setStatusShow(false);

        if (currentTask && projectId) {
            const newTask = { ...currentTask };
            newTask.status = status;
            if (status === "Process") {
                newTask.endDate = null;
            } else {
                console.log(new Date().getTime());

                newTask.endDate = new Date().getTime();
            }
            dispatch(setCurrentTask(newTask));
            dispatch(changeTask(+projectId, newTask));
        }
    };

    const coloredStatusBtn = () => {
        switch (currentTask?.status) {
            case "Process":
                return "yellow";
            case "Failed":
                return "red";
            default:
                return "";
        }
    };

    const showManuHamdler = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        type: "status" | "priority"
    ) => {
        e.stopPropagation();
        if (type === "status") setStatusShow(true);
        if (type === "priority") setPriorityShow(true);
    };

    return (
        <>
            <div className="currentTask__properties">
                <span className="currentTask__properties-name">Priority:</span>
                <button
                    className={`currentTask__properties-btn ${
                        currentTask?.priority === "Immediately"
                            ? "red"
                            : "yellow"
                    }`}
                    onClick={(e) => showManuHamdler(e, "priority")}
                >
                    {currentTask?.priority}
                </button>
                <div
                    className={`currentTask__properties-menu " ${
                        priorityShow && "show"
                    }`}
                >
                    <button
                        className="currentTask__properties-btn red"
                        onClick={() => onPriorityClickHandler("Immediately")}
                    >
                        Immediately
                    </button>
                    <button
                        className="currentTask__properties-btn yellow"
                        onClick={() => onPriorityClickHandler("Urgently")}
                    >
                        Urgently
                    </button>
                </div>
            </div>
            <div className="currentTask__properties">
                <span className="currentTask__properties-name">Status</span>
                <button
                    className={`currentTask__properties-btn ${coloredStatusBtn()}`}
                    onClick={(e) => showManuHamdler(e, "status")}
                >
                    {currentTask?.status}
                </button>
                <div
                    className={`currentTask__properties-menu ${
                        statusShow && "show"
                    }`}
                >
                    <button
                        className="currentTask__properties-btn"
                        onClick={() => onStatusClickHandler("Done")}
                    >
                        Done
                    </button>
                    <button
                        className="currentTask__properties-btn yellow"
                        onClick={() => onStatusClickHandler("Process")}
                    >
                        Process
                    </button>
                    <button
                        className="currentTask__properties-btn red"
                        onClick={() => onStatusClickHandler("Failed")}
                    >
                        Failed
                    </button>
                </div>
            </div>
        </>
    );
};

export default CurrentTaskProperties;
