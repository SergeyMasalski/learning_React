import Layout from './components/Layout/component';
import Restaurants from './components/Restaurants/component';
import restaurants from './constants/mocks';

const App = () => {
  return (
    <Layout>
      <Restaurants restaurants={restaurants} />
    </Layout>
  );
};

export default App;
