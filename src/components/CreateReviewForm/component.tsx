import { FC, useReducer } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface Props {}

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

const CreateReviewForm: FC<Props> = ({}) => {
  const [form, dispatch] = useReducer<(state: State, action: Action) => State>(reducer, initialState);

  return (
    <div className={classNames(styles.root)}>
      <h3>Write your review please</h3>
      <label htmlFor={styles.name}>Name</label>
      <input type="text" name="name" id={styles.name} value={form.name} onChange={event => dispatch({ type: 'setName', payload: event.target.value })} />

      <label htmlFor={styles.text}>Text review</label>
      <input type="text" name="text" id={styles.text} value={form.message} onChange={event => dispatch({ type: 'setMessage', payload: event.target.value })} />

      <label htmlFor={styles.raiting}>Rating restaurant</label>
      <input
        type="number"
        name="raiting"
        min="1"
        max="5"
        id={styles.raiting}
        value={form.raiting}
        onChange={event => dispatch({ type: 'setRaiting', payload: event.target.value })}
      />
    </div>
  );
};

export default CreateReviewForm;
