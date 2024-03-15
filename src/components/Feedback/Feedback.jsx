const Feedback = ({ reviews, totalFeedback, positive }) => {
  return (
    <ul>
      <li>Good:{reviews.good}</li>
      <li>Neutral:{reviews.neutral}</li>
      <li>Bad:{reviews.bad}</li>
      <li>Total:{totalFeedback}</li>
      <li>Positive:{positive}%</li>
    </ul>
  );
};
export default Feedback;
