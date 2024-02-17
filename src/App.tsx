import { Provider } from 'react-redux';
import { store } from './redux';
import RestaurantPage from './pages/restaurantPage/page';

const App = () => {
  return (
    <Provider store={store}>
      <RestaurantPage />
    </Provider>
  );
};

export default App;
