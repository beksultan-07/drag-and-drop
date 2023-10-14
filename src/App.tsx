import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";

import Home from "./routes/home";
import Tasks from "./routes/tasks";
import { data } from "./api/data";
import { setProjects } from "./store/reducers/projects/actions";
import { RootState } from "./store/reducers";
import RegisterName from "./moduls/register_modal";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/tasks",
        element: <Tasks />,
    },
]);

const App: React.FC = () => {
    const dispatch = useDispatch();

    const name = useSelector((state: RootState) => state.base.name);

    React.useEffect(() => {
        dispatch(setProjects(data));
    }, []);

    if (name.length === 0 || name === "some name") return <RegisterName />;

    return <RouterProvider router={router} />;
};

export default App;
