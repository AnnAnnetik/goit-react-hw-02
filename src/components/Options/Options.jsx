const Options = ({ updateFeedback, totalFeedback, onClickreset }) => {
  return (
    <div>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback !== 0 && (
        <button onClick={() => onClickreset('rest')}>Rest</button>
      )}
    </div>
  );
};
export default Options;
