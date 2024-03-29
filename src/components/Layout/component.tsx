import classNames from 'classnames';
import Footer from '../Footer/component';
import Header from '../Header/component';
import React, { FC } from 'react';
import styles from './styles.module.scss';

interface layoutProps {
  children?: React.ReactNode;
}

const Layout: FC<layoutProps> = ({ children }: layoutProps) => {
  return (
    <div className={classNames(styles.root)}>
      <Header />
      {children}
      <Footer />
      <div id="modal-container" className={styles.modal}></div>
    </div>
  );
};

export default Layout;
