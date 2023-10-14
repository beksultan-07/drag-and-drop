import React, { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/reducers";
import { ProjectType } from "../../store/reducers/projects";
import { addProjcet } from "../../store/reducers/projects/actions";

const ProjectsList = () => {
    const nav = useNavigate();

    const projectsState = useSelector(
        (state: RootState) => state.projects.projects
    );

    const dispatch = useDispatch();

    const createNewProjectHandler = () => {
        const newProject: ProjectType = {
            id: new Date().getTime(),
            name: "",
            tasks: [],
        };
        dispatch(addProjcet(newProject));
        nav("tasks?id=" + newProject.id);
    };

    return (
        <section className="cards">
            <ul className="cards__list">
                {projectsState.map((el) => (
                    <li className="cards__list__item" key={el.id}>
                        <button
                            onClick={() => nav("/tasks?id=" + el.id)}
                            className="cards__list__item-button"
                        >
                            {el.name}
                        </button>
                    </li>
                ))}
                <li className="cards__list__item">
                    <button
                        onClick={() => createNewProjectHandler()}
                        className="cards__list__item-button btn"
                    >
                        create project
                    </button>
                </li>
            </ul>
        </section>
    );
};

export default ProjectsList;
