import { FC } from 'react';

interface reviewProps {
  textReview: string;
}

const Review: FC<reviewProps> = ({ textReview }) => {
  return <div>{textReview}</div>;
};

export default Review;
