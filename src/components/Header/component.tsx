import Login from '../Login/component';
import styles from './style.module.scss';
import classnames from 'classnames';

function Header() {
  return (
    <header className={classnames(styles.root, styles.text)}>
      <Login />
    </header>
  );
}

export default Header;
