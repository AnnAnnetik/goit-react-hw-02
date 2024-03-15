import { useEffect, useState } from 'react';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Description from './Description/Description';
import Notification from './Notification/Notification';

const App = () => {
  const initialReviews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [reviews, setReviews] = useState(() => {
    const stringiReviews = localStorage.getItem('feedbackreviews');
    const parsedReviews = JSON.parse(stringiReviews) ?? initialReviews;
    return parsedReviews;
  });

  const updateFeedback = feedbackType => {
    setReviews({
      ...reviews,
      [feedbackType]: reviews[feedbackType] + 1,
    });
  };
  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedbackPersantage = Math.round(
    ((reviews.good + reviews.neutral) / totalFeedback) * 100
  );

  const onClickreset = () => {
    setReviews(initialReviews);
  };
  useEffect(() => {
    localStorage.setItem('feedbackreviews', JSON.stringify(reviews));
  }, [reviews]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        onClickreset={onClickreset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          reviews={reviews}
          totalFeedback={totalFeedback}
          positive={positiveFeedbackPersantage}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
