import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import "./styled.scss";

import { RootState } from "../../store/reducers";
import { ProjectType } from "../../store/reducers/projects";
import { TaskType } from "../../store/reducers/currentTask";
import { setTasks } from "../../store/reducers/projects/actions";

import TasksColumn from "./components/column";

const TasksList: React.FC = () => {
    const [currentProject, setCurrentProject] =
        React.useState<ProjectType | null>();

    const [currenTask, setCurrenTask] = React.useState<TaskType | null>();

    const [projectId, setProjectId] = React.useState<number>(0);

    const [searchParams] = useSearchParams();
    const projects = useSelector((state: RootState) => state.projects.projects);
    const searchValue = useSelector(
        (state: RootState) => state.base.searchValue
    );

    React.useEffect(() => {
        const id = searchParams.get("id");
        if (id) {
            setProjectId(+id);
            setCurrentProject(projects.find((el) => el.id === +id));
        }
    }, [projects, searchParams]);

    if (searchValue) {
        const tasks =
            currentProject?.tasks.filter(
                (task) =>
                    task.name.includes(searchValue) ||
                    task.text.includes(searchValue) ||
                    task.order.toString().includes(searchValue + "")
            ) || [];
        console.log(tasks[0]);

        return (
            <div className="tasks">
                <div className="tasks__col">
                    <h3 className="tasks__col-title">Finded</h3>
                    <TasksColumn
                        currenTask={currenTask}
                        setCurrenTask={setCurrenTask}
                        col="All"
                        projectId={projectId}
                        tasks={tasks || []}
                    />
                </div>
            </div>
        );
    }
    return (
        <div className="tasks">
            <div className="tasks__col">
                <h3 className="tasks__col-title">Queue</h3>
                <TasksColumn
                    currenTask={currenTask}
                    setCurrenTask={setCurrenTask}
                    col="Queue"
                    projectId={projectId}
                    tasks={currentProject?.tasks || []}
                />
            </div>
            <div className="tasks__col">
                <h3 className="tasks__col-title">Development</h3>
                <TasksColumn
                    currenTask={currenTask}
                    setCurrenTask={setCurrenTask}
                    col="Development"
                    projectId={projectId}
                    tasks={currentProject?.tasks || []}
                />
            </div>
            <div className="tasks__col">
                <h3 className="tasks__col-title">Done</h3>
                <TasksColumn
                    currenTask={currenTask}
                    setCurrenTask={setCurrenTask}
                    col="Done"
                    projectId={projectId}
                    tasks={currentProject?.tasks || []}
                />
            </div>
        </div>
    );
};

export default TasksList;
