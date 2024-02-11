import { useState } from 'react';
import Layout from './components/Layout/component';
import Restaurants from './components/Restaurants/component';
import restaurants from './constants/mocks';
import AuthorizationContext from './contexts/Authorization';
import Interfaces from './constants/interfaces';

const App = () => {
  const [user, setUser] = useState<Interfaces.User | undefined>();

  return (
    <AuthorizationContext.Provider value={{ user, setUser }}>
      <Layout>
        <Restaurants restaurants={restaurants} />
      </Layout>
    </AuthorizationContext.Provider>
  );
};

export default App;
