import { FC } from 'react';
import Interfaces from '../../constants/interfaces';
import Menu from '../Menu/component';
import Reviews from '../Reviews/component';

interface restaurantProbs {
  restaurant: Interfaces.Restaurant;
}

const Restaurant: FC<restaurantProbs> = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <h3>Меню</h3>
      <Menu menu={restaurant.menu} />
      <h3>Отзывы</h3>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};

export default Restaurant;
