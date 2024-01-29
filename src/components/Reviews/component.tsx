import { FC } from 'react';
import Interfaces from '../../constants/interfaces';
import Review from '../Review/component';

interface reviewsProps {
  reviews: Interfaces.Review[];
}

const Reviews: FC<reviewsProps> = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => (
        <li>
          <Review textReview={review.text} />
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
