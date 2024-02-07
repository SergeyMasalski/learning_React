import { FC } from 'react';
import Interfaces from '../../constants/interfaces';
import Menu from '../Menu/component';
import Reviews from '../Reviews/component';
import CreateReviewForm from '../CreateReviewForm/component';

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
      <CreateReviewForm />
    </div>
  );
};

export default Restaurant;
