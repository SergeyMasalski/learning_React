import { FC, useContext, useEffect, useReducer } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import AuthorizationContext from '../../contexts/Authorization';
import { useCreateReviewMutation } from '../../redux/servises/api';

interface Props {
  restaurantId: string;
}

type State = {
  name: string;
  message: string;
  raiting: string;
};

type Action = {
  type: string;
  payload: string;
};

const initialState: State = {
  name: '',
  message: '',
  raiting: '1',
};

const reducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case 'setName':
      return {
        ...initialState,
        name: payload,
      };

    case 'setMessage':
      return {
        ...state,
        message: payload,
      };

    case 'setRaiting':
      return {
        ...state,
        raiting: payload,
      };
    default:
      return state;
  }
};

const CreateReviewForm: FC<Props> = ({ restaurantId }) => {
  const [form, dispatch] = useReducer<(state: State, action: Action) => State>(reducer, initialState);

  const { user } = useContext(AuthorizationContext);

  let [createReview] = useCreateReviewMutation();

  useEffect(() => {
    if (user) dispatch({ type: 'setName', payload: user?.name });
  }, [user?.name]);

  return (
    <div className={classNames(styles.root)}>
      <h3>Write your review please</h3>
      <label htmlFor={styles.name}>Name</label>
      <input
        type="text"
        name="name"
        id={styles.name}
        value={form.name}
      />

      <label htmlFor={styles.text}>Text interfacereview</label>
      <input
        type="text"
        name="text"
        id={styles.text}
        value={form.message}
        onChange={(event) => dispatch({ type: 'setMessage', payload: event.target.value })}
      />

      <label htmlFor={styles.raiting}>Rating restaurant</label>
      <input
        type="number"
        name="raiting"
        min="1"
        max="5"
        id={styles.raiting}
        value={form.raiting}
        onChange={(event) => dispatch({ type: 'setRaiting', payload: event.target.value })}
      />
      <button
        onClick={() => {
          createReview({
            restaurantId,
            newReview: {
              userId: '52a63cc0-5a6f-41f3-9774-0161ea4c9b0c', // Так как по API нельзя закинуть нового user
              text: form.message,
              raiting: form.raiting,
            },
          });
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default CreateReviewForm;
