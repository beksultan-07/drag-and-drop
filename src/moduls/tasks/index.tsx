import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import "./styled.scss";

import { RootState } from "../../store/reducers";
import { ProjectType } from "../../store/reducers/projects";
import { TaskType } from "../../store/reducers/currentTask";
import { changeTasks } from "../../store/reducers/projects/actions";

import TasksColumn from "./components/column";

const TasksList: React.FC = () => {
    const [currentProject, setCurrentProject] =
        React.useState<ProjectType | null>();

    const [currenTask, setCurrenTask] = React.useState<TaskType | null>();

    const [projectId, setProjectId] = React.useState<number>(0);

    const [searchParams] = useSearchParams();
    const projects = useSelector((state: RootState) => state.projects.projects);

    const dispatch = useDispatch();

    React.useEffect(() => {
        const id = searchParams.get("id");
        if (id) {
            setProjectId(+id);

            const currentProject = projects.find((el) => el.id === +id);
            setCurrentProject(currentProject);
        }
    }, [projects]);

    const onDropToCol = (col: "Queue" | "Development" | "Done") => {
        console.log(col);

        if (currenTask && currentProject) {
            const newTasks: Array<TaskType> = currentProject.tasks.map((t) => {
                if (t.id === currenTask.id) {
                    return {
                        ...t,
                        col: col,
                    };
                }
                return t;
            });

            dispatch(changeTasks(+projectId, newTasks));
            setCurrenTask(null);
        }
    };

    return (
        <div className="tasks">
            <div className="tasks__col">
                <h3 className="tasks__col-title">Queue</h3>
                <TasksColumn
                    onDropToCol={onDropToCol}
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
                    onDropToCol={onDropToCol}
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
                    onDropToCol={onDropToCol}
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
