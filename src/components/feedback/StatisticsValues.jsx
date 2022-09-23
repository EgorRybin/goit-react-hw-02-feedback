import PropTypes from "prop-types";

import s from './StatisticsValues.module.css'

const StatisticsValues = ({ state, countPercentage, totalFidback }) => {
  const { good, neutral, bad } = state;
  return (
    <div className={s.conteiner}>
      <p className={s.string} >good: {good}</p>
      <p className={s.string} >neutral: {neutral}</p>
      <p className={s.string} >bad: {bad}</p>
      <p className={s.string} >total: {totalFidback()}</p>
      <p className={s.string} >Positiv feedback: {countPercentage()}%</p>
    </div>
  );
};

export default StatisticsValues;

StatisticsValues.propTypes = {
  totalFidback: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  countPercentage: PropTypes.func.isRequired,
}
