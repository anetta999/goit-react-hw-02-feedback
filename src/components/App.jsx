import { Component } from 'react';
import { FeedbackOptions } from './Section/Feedback-options/FeedbackOptions ';
import { Section } from './Section/Section';
import { Statistics } from './Section/Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveGoodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  onLeaveNeutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.good + 1,
      };
    });
  };

  onLeaveBadFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.good + 1,
      };
    });
  };

  render() {
    const { state } = this.state;

    const countTotalFeedback = () => {
      return state.good + state.neutral + state.bad;
    };

    const positivePercentage = () => {
      return (1 - (state.neutral + state.bad / 100)) * 100;
    };

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={state}
            onLeaveGoodFeedback={this.onLeaveGoodFeedback}
            onLeaveNeutralFeedback={this.onLeaveNeutralFeedback}
            onLeaveBadFeedback={this.onLeaveBadFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}
