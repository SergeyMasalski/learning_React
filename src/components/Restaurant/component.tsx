import { FC, useContext } from 'react';
import Interfaces from '../../constants/interfaces';
import Menu from '../Menu/component';

import CreateReviewForm from '../CreateReviewForm/component';
import AuthorizationContext from '../../contexts/Authorization';

import Reviews from '../Reviews/component';
import { useGetDishByRestaurantIdQuery, useGetReviewByRestaurantIdQuery, useGetUsersQuery } from '../../redux/servises/api';

interface restaurantProbs {
  restaurant: Interfaces.Restaurant;
}

const Restaurant: FC<restaurantProbs> = ({ restaurant }) => {
  const { user } = useContext(AuthorizationContext);
  const { isLoading: isLoadingDish, data: restaurantMenu } = useGetDishByRestaurantIdQuery(restaurant.id);

  const { isLoading: isLoadingReview, data: reviews } = useGetReviewByRestaurantIdQuery(restaurant.id);

  const { data: users } = useGetUsersQuery();

  return restaurant ? (
    <div>
      <h2>{restaurant.name}</h2>
      <h3>Меню</h3>
      {isLoadingDish ? <div>Loading...</div> : <Menu menu={restaurantMenu} />}
      <h3>Отзывы</h3>
      {isLoadingReview ? (
        <div>Loading...</div>
      ) : (
        <Reviews
          reviews={reviews}
          users={users}
        />
      )}
      {user && <CreateReviewForm restaurantId={restaurant.id} />}
    </div>
  ) : null;
};

export default Restaurant;
