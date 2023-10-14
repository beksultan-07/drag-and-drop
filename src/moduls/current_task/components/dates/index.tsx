import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../../../store/reducers";

const CurrentTaskDates = () => {
    const currentTaskState = useSelector(
        (state: RootState) => state.currentTask.currentTask
    );

    const formatDate = (timestamp: number) => {
        const date = new Date(timestamp);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };
    return (
        <>
            <div className="currentTask__properties">
                <span className="currentTask__properties-name">Started: </span>
                <span className="currentTask__properties-value">
                    {formatDate(currentTaskState?.startDate || 0)}
                </span>
            </div>
            <div className="currentTask__properties">
                <span className="currentTask__properties-name">Done:</span>
                <span className="currentTask__properties-value">
                    {currentTaskState?.endDate
                        ? formatDate(currentTaskState.endDate)
                        : "-"}
                </span>
            </div>
        </>
    );
};

export default CurrentTaskDates;
