export const FeedbackOptions = ({
  options,
  onLeaveGoodFeedback,
  onLeaveNeutralFeedback,
  onLeaveBadFeedback,
}) => {
  return (
    <ul>
      <li>
        <button onClick={onLeaveGoodFeedback}>Good</button>
      </li>
      <li>
        <button onClick={onLeaveNeutralFeedback}>Neutral</button>
      </li>
      <li>
        <button onClick={onLeaveBadFeedback}>Bad</button>
      </li>
    </ul>
  );
};
