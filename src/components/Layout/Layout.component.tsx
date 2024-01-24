import Footer from '../Footer/Footer.component';
import Header from '../Header/Header.component';
import Restaurant from '../Restaurant/Restaurant.component';
import restaurants from '../../constants/mocks';
import Interfaces from '../../constants/interfaces';

const Layout = () => {
  return (
    <div>
      <Header></Header>
      {restaurants.map((restaurant: Interfaces.Restaurant) => (
        <Restaurant restaurant={restaurant} />
      ))}
      <Footer />
    </div>
  );
};

export default Layout;
