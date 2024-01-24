import styles from './style.module.scss';
import classnames from 'classnames';

function Header() {
  console.log(styles);

  return <header className={classnames(styles.root, styles.text)}>Header</header>;
}

export default Header;
