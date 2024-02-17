import { FC, useContext } from 'react';
import Interfaces from '../../constants/interfaces';
import Menu from '../Menu/component';

import CreateReviewForm from '../CreateReviewForm/component';
import AuthorizationContext from '../../contexts/Authorization';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/selector';
import Reviews from '../Reviews/component';

interface restaurantProbs {
  restaurantId: string;
}

const Restaurant: FC<restaurantProbs> = ({ restaurantId }) => {
  const { user } = useContext(AuthorizationContext);
  const restaurant = useSelector<unknown, Interfaces.RestaurantsNorm>((state: unknown) => selectRestaurantById(state, restaurantId));

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <h3>Меню</h3>
      <Menu menu={restaurant.menu} />
      <h3>Отзывы</h3>
      <Reviews reviewIds={restaurant.reviews} />
      {user && <CreateReviewForm />}
    </div>
  );
};

export default Restaurant;
