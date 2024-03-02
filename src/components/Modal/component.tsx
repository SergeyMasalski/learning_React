import { FC, useContext, useReducer } from 'react';
import styles from './styles.module.scss';
import AuthorizationContext from '../../contexts/Authorization';
import Interfaces from '../../constants/interfaces';

interface Props {
  onClose: (status: boolean) => void;
}

interface Action {
  type: string;
  payload: string;
  setUser?: (user: Interfaces.User | undefined) => void | undefined;
  onClose?: (status: boolean) => void;
}

let initialValue: Interfaces.User = {
  name: '',
  mail: '',
};

function reducer(state: Interfaces.User | undefined, { type, payload, setUser, onClose }: Action): Interfaces.User | undefined {
  switch (type) {
    case 'setName':
      if (!state) return { name: payload, mail: '' };
      return { ...state, name: payload };

    case 'setMail':
      if (!state) return { mail: payload, name: '' };
      return { ...state, mail: payload };
      2;

    default:
      if (!setUser || !onClose) return state;
      if (!state?.mail || !state?.name) return undefined;
      setUser(state);
      onClose(false);
      return state;
  }
}

const Modal: FC<Props> = ({ onClose }) => {
  const { setUser } = useContext(AuthorizationContext);
  const [form, dispatch] = useReducer<(state: Interfaces.User | undefined, action: Action) => Interfaces.User | undefined>(reducer, initialValue);

  return (
    <div className={styles.root}>
      <div className={styles.containerForm}>
        <h3 className={styles.nameModal}>Write your name and email</h3>

        <label
          htmlFor={styles.name}
          className={styles.name}
        >
          Name:
        </label>
        <input
          type="text"
          value={form?.name}
          id={styles.name}
          className={styles.inputs}
          onChange={(event) => dispatch({ type: 'setName', payload: event.target.value })}
        />

        <label
          htmlFor={styles.mail}
          className={styles.mail}
        >
          Mail:
        </label>
        <input
          type="text"
          id={styles.mail}
          value={form?.mail}
          className={styles.inputs}
          onChange={(event) => dispatch({ type: 'setMail', payload: event.target.value })}
        />
        <button
          className={styles.loginButton}
          onClick={() => dispatch({ type: '', payload: '', setUser, onClose })}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Modal;
