import PropTypes from "prop-types";

import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button className={s.button} name="good" type="button" onClick={onLeaveFeedback}>
        good
      </button>
      <button className={s.button} name="neutral" type="button" onClick={onLeaveFeedback}>
        neutral
      </button>
      <button className={s.button} name="bad" type="button" onClick={onLeaveFeedback}>
        bad
      </button>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired
}
