import { FC } from 'react';
import styles from './styles.module.scss';

import Review from '../Review/component';
import Interfaces from '../../constants/interfaces';
import classNames from 'classnames';

interface reviewsProps {
  reviews: Interfaces.Review[] | undefined;
  users: Interfaces.User[] | undefined;
}

const Reviews: FC<reviewsProps> = ({ reviews, users }) => {
  if (reviews)
    return (
      <ul className={classNames(styles.reviews)}>
        {reviews.map((review) => (
          <li
            key={review.id}
            className={classNames(styles.review)}
          >
            <Review
              user={users?.find(({ id }) => review.userId === id)}
              review={review}
            />
          </li>
        ))}
      </ul>
    );
};

export default Reviews;
