import React from "react";

import { taskCommentsType } from "../../../../store/reducers/currentTask";

interface Props {
    commentIndets: number;
    comments: Array<taskCommentsType>;
    choosenComment: (
        e: React.MouseEvent<HTMLLIElement, MouseEvent>,
        comment: taskCommentsType
    ) => void;
}

const CurrentTaskCommentsList: React.FC<Props> = ({
    commentIndets,
    comments,
    choosenComment,
}) => {
    if (commentIndets > 1) return null;
    return (
        <ul
            className="currentTask__comments-wrap"
            style={{ marginLeft: `${commentIndets * 15}px` }}
        >
            {comments.map((el) => (
                <li
                    key={el.id}
                    className="currentTask__comments__comment"
                    onClick={(e) => choosenComment(e, el)}
                >
                    <h5 className="currentTask__comments__comment-author">
                        {el.author}
                    </h5>
                    <p className="currentTask__comments__comment-text">
                        {el.text}
                    </p>
                    <CurrentTaskCommentsList
                        choosenComment={choosenComment}
                        commentIndets={commentIndets + 1}
                        comments={el.subcomments}
                    />
                </li>
            ))}
        </ul>
    );
};

export default CurrentTaskCommentsList;
