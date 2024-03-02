import classNames from 'classnames';
import { FC, useEffect, useReducer } from 'react';
import styles from './styles.module.scss';
import Interfaces from '../../constants/interfaces';
import { useEditReviewMutation } from '../../redux/servises/api';

interface Props {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  review: Interfaces.Review;
}

type State = {
  text: string;
  raitng: string;
};

type Action = {
  type: string;
  payload: string;
};

function reducer(state: State, { type, payload }: Action) {
  switch (type) {
    case 'editRaiting':
      return { ...state, raitng: payload };

    case 'editReview':
      return { ...state, text: payload };

    default:
      return state;
  }
}

const EditReviewComponent: FC<Props> = ({ onClose, review }) => {
  const initialState: State = {
    text: review.text,
    raitng: `${review.rating}`,
  };

  const [form, dispatch] = useReducer<(state: State, action: Action) => State>(reducer, initialState);

  const [editReview] = useEditReviewMutation();

  useEffect(() => {
    form.text = review.text;
    form.raitng = `${review.rating}`;
  }, [review]);

  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.containerModal)}>
        <label htmlFor="edit-text">Edit text review:</label>
        <input
          type="text"
          id="edit-text"
          value={form.text}
          onChange={(event) => dispatch({ type: 'editReview', payload: event.target.value })}
        />
        <label htmlFor="edit-raiting">Edit raiting:</label>
        <input
          type="number"
          id="edit-raiting"
          min="1"
          max="5"
          value={form.raitng}
          onChange={(event) => {
            dispatch({ type: 'editRaiting', payload: event.target.value });
          }}
        />
        <div className={classNames(styles.buttons)}>
          <button onClick={() => onClose(false)}>Close</button>
          <button
            onClick={() => {
              onClose(false);
              editReview({
                reviewId: review.id,
                editReview: {
                  text: form.text,
                  rating: form.raitng,
                },
              });
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditReviewComponent;
