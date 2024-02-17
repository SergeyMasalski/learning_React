import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/reviews/selector';
import Interfaces from '../../constants/interfaces';
import { State } from '../../redux';

interface reviewProps {
  reviewId: string;
}

const Review: FC<reviewProps> = ({ reviewId }) => {
  const review = useSelector<State, Interfaces.ReviewNorm>((state: State) => selectReviewById(state, reviewId));

  return review ? <div>{review.text}</div> : null;
};

export default Review;
