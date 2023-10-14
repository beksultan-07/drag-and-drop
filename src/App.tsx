import React from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";

import Home from "./routes/home";
import Tasks from "./routes/tasks";
import { data } from "./api/data";
import { setProjects } from "./store/reducers/projects/actions";

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
    React.useEffect(() => {
        dispatch(setProjects(data));
    }, []);

    return <RouterProvider router={router} />;
};

export default App;
