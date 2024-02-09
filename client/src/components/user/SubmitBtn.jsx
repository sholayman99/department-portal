import React from 'react';
import userStore from "../../store/userStore.js";
import {motion} from "framer-motion";

const SubmitBtn = (props) => {
    const {isFormSubmit} = userStore();
    if(isFormSubmit===false) {
        return <motion.button onClick={props.onClick} whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}} transition={{type: "spring", stiffness: 400, damping: 17}}
            className="btn btn-primary">
            {props.text}
        </motion.button>
    } else {
        return (
            <button className="btn btn-primary">
                <span className="loading loading-spinner"></span>
                loading
            </button>
        );
    }
};

export default SubmitBtn;