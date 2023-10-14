import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { RootState } from "../../../../store/reducers";
import CurrentTaskCommentsList from "../comment_list";
import { taskCommentsType } from "../../../../store/reducers/currentTask";
import { setCurrentTask } from "../../../../store/reducers/currentTask/actions";
import { changeTask } from "../../../../store/reducers/projects/actions";

const CurrentTaskComments: React.FC = () => {
    const [inputText, setInputText] = React.useState("");
    const [currentComment, setCurrentComment] =
        React.useState<taskCommentsType | null>(null);

    const task = useSelector(
        (state: RootState) => state.currentTask.currentTask
    );

    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();

    const SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const projectId = searchParams.get("id");
        if (projectId && task) {
            const newComment: taskCommentsType = {
                author: "your name",
                date: new Date().getTime(),
                id: new Date().getTime(),
                subcomments: [],
                text: inputText,
            };
            const newTask = { ...task };

            if (currentComment === null) {
                newTask.comments = [...newTask.comments, newComment];
            } else {
                newTask.comments = newTask.comments.map((el) => {
                    if (el.id === currentComment.id) {
                        return {
                            ...el,
                            subcomments: [...el.subcomments, newComment],
                        };
                    }
                    return el;
                });
            }
            dispatch(setCurrentTask(newTask));
            dispatch(changeTask(+projectId, newTask));
            setCurrentComment(null);
            setInputText("");
        }
    };

    const choosenCommentHandler = (
        e: React.MouseEvent<HTMLLIElement, MouseEvent>,
        comment: taskCommentsType
    ) => {
        e.stopPropagation();
        setCurrentComment(comment);
    };

    return (
        <div className="currentTask__comments">
            <h4 className="currentTask__comments-title">Comments</h4>

            <CurrentTaskCommentsList
                choosenComment={choosenCommentHandler}
                commentIndets={0}
                comments={task?.comments || []}
            />

            {currentComment && (
                <p className="currentTask__comments-answer">
                    answer to: {currentComment.author}
                </p>
            )}
            <form
                action="#"
                className="currentTask__comments__form"
                onSubmit={(e) => SubmitHandler(e)}
            >
                <input
                    placeholder="text..."
                    type="text"
                    value={inputText}
                    className="currentTask__comments__form-input"
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button className="currentTask__comments__form-btn">
                    Send
                </button>
            </form>
        </div>
    );
};

export default CurrentTaskComments;
