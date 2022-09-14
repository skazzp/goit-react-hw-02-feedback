import React from 'react';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={css.options}>
      <button
        className={css.btn}
        type="button"
        data-id="good"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        className={css.btn}
        type="button"
        data-id="neutral"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        className={css.btn}
        type="button"
        data-id="bad"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
