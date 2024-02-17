import { useState } from 'react';
import Layout from './components/Layout/component';
import Restaurants from './components/Restaurants/component';

import AuthorizationContext from './contexts/Authorization';
import Interfaces from './constants/interfaces';
import { Provider } from 'react-redux';
import { store } from './redux';

const App = () => {
  const [user, setUser] = useState<Interfaces.User | undefined>();

  return (
    <Provider store={store}>
      <AuthorizationContext.Provider value={{ user, setUser }}>
        <Layout>
          <Restaurants />
        </Layout>
      </AuthorizationContext.Provider>
    </Provider>
  );
};

export default App;
