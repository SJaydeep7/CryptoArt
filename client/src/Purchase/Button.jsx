import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./button.css";

export const Button = ({ stateProp, className }) => {
    const [state, dispatch] = useReducer(reducer, {
        state: stateProp || "default",
    });

    return (
        <div
            className={`button ${state.state} ${className}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            <div className="get-started">Get Started</div>
        </div>
    );
};

function reducer(state, action) {
    switch (action) {
        case "mouse_enter":
            return {
                ...state,
                state: "hover",
            };

        case "mouse_leave":
            return {
                ...state,
                state: "default",
            };
    }

    return state;
}

Button.propTypes = {
    stateProp: PropTypes.oneOf(["hover", "default"]),
};
