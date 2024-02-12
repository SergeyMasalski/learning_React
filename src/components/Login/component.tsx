import { FC, useContext, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import Modal from '../Modal/component';
import AuthorizationContext from '../../contexts/Authorization';
import UserView from '../UserView/component';

interface Props {}

const Login: FC<Props> = () => {
  const { user, setUser } = useContext(AuthorizationContext);
  const [openCloseModal, setOpenCloseModal] = useState<boolean>(false);
  const modalContainer = useRef<HTMLElement | null>();

  useEffect(() => {
    modalContainer.current = document.getElementById('modal-container');
  }, []);

  return (
    <div className={classNames(styles.root)}>
      {modalContainer.current && openCloseModal ? createPortal(<Modal onClose={setOpenCloseModal} />, modalContainer.current) : null}
      <button
        onClick={() => {
          if (user && setUser) return setUser(undefined);
          setOpenCloseModal(!openCloseModal);
        }}
        className={classNames(styles.button)}
      >
        {user ? 'Quit' : 'Login'}
      </button>
      {user && <UserView />}
    </div>
  );
};

export default Login;
