import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ otions, onLeaveFeedback }) => {
  return (
    <>
      {otions.map((el, index) => (
        <button
          className={s.button}
          name={el}
          type="button"
          onClick={onLeaveFeedback}
          key={index}
        >
          {el}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
