import Interfaces from '../../constants/interfaces';
import Layout from '../../components/Layout/component';
import Restaurants from '../../components/Restaurants/component';
import AuthorizationContext from '../../contexts/Authorization';

import { FC, useState } from 'react';

interface Props {}

const RestaurantPage: FC<Props> = ({}) => {
  const [user, setUser] = useState<Interfaces.User | undefined>();

  return (
    <>
      <AuthorizationContext.Provider value={{ user, setUser }}>
        <Layout>
          <Restaurants />
        </Layout>
      </AuthorizationContext.Provider>
    </>
  );
};

export default RestaurantPage;
