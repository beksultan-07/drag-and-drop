import React from "react";
import "./style.scss";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/reducers";
import {
    changeProjectName,
    deleteProject,
} from "../../store/reducers/projects/actions";
import { setSearchValue } from "../../store/reducers/base/actions";

const Header = () => {
    const [currentProjectName, setCurrentProjectName] =
        React.useState<string>("");
    const projects = useSelector((state: RootState) => state.projects.projects);
    const [projectId, setProjectId] = React.useState<number>(0);
    const [inputValue, setInputValue] = React.useState("");

    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    const nav = useNavigate();

    React.useEffect(() => {
        const id = searchParams.get("id");
        if (id) {
            setProjectId(+id);
            setCurrentProjectName(
                projects.find((el) => el.id === +id)?.name || ""
            );
        }
    }, [projects, searchParams]);

    const changeNameHandler = (value: string) => {
        dispatch(changeProjectName(projectId, value));
    };

    const deleteProjectHandler = () => {
        dispatch(deleteProject(projectId));
        nav("/");
    };

    const submitHamdler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setSearchValue(inputValue));
    };

    return (
        <header className="header">
            <div className="header-left header-settings">
                <Link to="/" className="header-back">
                    back
                </Link>
                <input
                    type="text"
                    className="header-title"
                    value={currentProjectName}
                    onChange={(e) => changeNameHandler(e.target.value)}
                />
            </div>

            <div className="header-right header-settings">
                <form
                    action="#"
                    className="currentTask__comments__form"
                    onSubmit={(e) => submitHamdler(e)}
                >
                    <input
                        placeholder="text..."
                        type="text"
                        className="currentTask__comments__form-input"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                    />
                    <button className="currentTask__comments__form-btn">
                        search
                    </button>
                </form>

                <button
                    className="currentTask__properties-btn red"
                    onClick={deleteProjectHandler}
                >
                    delete projcet
                </button>
            </div>
        </header>
    );
};

export default Header;
