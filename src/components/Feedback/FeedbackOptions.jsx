import React from 'react';
import css from "../Feedback/FeedbackOptions.module.css"

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css.FeedbackList}>
            {options.map((option) => (
                <li className={css.FeedbackItem} key={option}>
                <button className={css.FeedbackBtn} onClick={() => onLeaveFeedback(option)}>{option}</button>
                </li>
            ))}
        </ul>
    );
};

export default FeedbackOptions;