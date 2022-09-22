import React, { Component } from 'react';

import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Sections from './Section';
import StatisticsValues from './StatisticsValues';

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prev => {
      return {
        [name]: prev[name] + 1,
      };
    });
  };

  totalFidback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.floor((good / (good + neutral + bad)) * 100);
  };

  noFeedbackMassage = () => {
    return this.totalFidback() <= 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const isActive = good + neutral + bad > 0;

    const { onLeaveFeedback, countPositiveFeedbackPercentage, totalFidback } =
      this;

    return (
      <>
        <Sections title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
        </Sections>

        <Sections title="Statistics">
          {isActive ? (
            <StatisticsValues
              totalFidback={totalFidback}
              state={this.state}
              countPercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Sections>
      </>
    );
  }
}

export default Statistics;
