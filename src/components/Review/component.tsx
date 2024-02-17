import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/reviews/selector';
import Interfaces from '../../constants/interfaces';

interface reviewProps {
  reviewId: string;
}

const Review: FC<reviewProps> = ({ reviewId }) => {
  const review = useSelector<unknown, Interfaces.ReviewNorm>((state: unknown) => selectReviewById(state, reviewId));
  return <div>{review.text}</div>;
};

export default Review;
