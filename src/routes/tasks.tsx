import React from "react";
import { useDispatch, useSelector } from "react-redux";

import TasksList from "../moduls/tasks";
import { RootState } from "../store/reducers";
import CurrentTask from "../moduls/current_task";
import Header from "../moduls/header";

const Tasks = () => {
    const showCurrentTask = useSelector(
        (state: RootState) => state.base.showCurrentTask
    );

    const dispatch = useDispatch();

    React.useEffect(() => {
        return document.addEventListener("click", () => {
            dispatch({ type: "SETSHOWCURRENTTASK", payload: false });
        });
    }, []);

    return (
        <>
            <Header />
            <TasksList />
            {showCurrentTask ? <CurrentTask /> : null}
        </>
    );
};

export default Tasks;
