import { FC, useRef, useState } from 'react';

import Interfaces from '../../constants/interfaces';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { createPortal } from 'react-dom';
import EditReviewComponent from '../EditReviewForm/component';

interface reviewProps {
  review: Interfaces.Review;
  user: Interfaces.User | undefined;
}

const Review: FC<reviewProps> = ({ review, user }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerModal = useRef(document.getElementById('modal-container'));

  return review && user ? (
    <div className={classNames(styles.root)}>
      {isOpen &&
        containerModal.current &&
        createPortal(
          <EditReviewComponent
            review={review}
            onClose={setIsOpen}
          />,
          containerModal.current
        )}

      <div>
        {user.name}: {review.text}{' '}
        <div className={classNames(styles.raiting, { [styles.red]: review.rating < 3, [styles.green]: review.rating > 3, [styles.yellow]: review.rating + '' === '3' })}>
          {review.rating}
        </div>
      </div>
      <button onClick={() => setIsOpen(true)}>Edit</button>
    </div>
  ) : null;
};

export default Review;
