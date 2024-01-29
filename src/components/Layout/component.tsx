import Footer from '../Footer/component';
import Header from '../Header/component';
import React, { FC } from 'react';

interface layoutProps {
  children?: React.ReactNode;
}

const Layout: FC<layoutProps> = ({ children }: layoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
