import { FC } from 'react';

import Review from '../Review/component';

interface reviewsProps {
  reviewIds: string[];
}

const Reviews: FC<reviewsProps> = ({ reviewIds }) => {
  return (
    <ul>
      {reviewIds.map(reviewId => (
        <li>
          <Review reviewId={reviewId} />
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
