import { FC, useContext } from 'react';
import AuthorizationContext from '../../contexts/Authorization';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface Props {}

const UserView: FC<Props> = () => {
  const { user } = useContext(AuthorizationContext);

  return <div className={classNames(styles.root)}>{user?.name}</div>;
};

export default UserView;
