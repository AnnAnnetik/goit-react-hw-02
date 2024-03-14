import { useState } from 'react';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Description from './Description/Description';
const App = () => {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setReviews({
      ...reviews,
      [feedbackType]: reviews[feedbackType] + 1,
    });
  };
  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      {totalFeedback > 0 && (
        <Feedback reviews={reviews} totalFeedback={totalFeedback} />
      )}
    </>
  );
};

export default App;
