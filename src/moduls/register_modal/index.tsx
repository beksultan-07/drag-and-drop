import React from "react";
import "./style.scss";
import { useDispatch } from "react-redux";

import { setUserName } from "../../store/reducers/base/actions";

const RegisterName = () => {
    const [inpVal, setInpVal] = React.useState("");

    const dispatch = useDispatch();

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inpVal.length > 0) {
            dispatch(setUserName(inpVal));
        }
    };

    return (
        <div className="modal-wrap">
            <div className="modal-content">
                <h3 className="modal-title">Write your name</h3>

                <form
                    action="#"
                    onSubmit={(e) => onSubmitHandler(e)}
                    className="modal-form"
                >
                    <input
                        type="text"
                        className="modal-input"
                        value={inpVal}
                        onChange={(e) => setInpVal(e.target.value)}
                    />
                    <button className="modal-btn">Apply</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterName;
