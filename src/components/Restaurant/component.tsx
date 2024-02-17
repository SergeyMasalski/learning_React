import { FC, useContext, useEffect, useState } from 'react';
import Interfaces from '../../constants/interfaces';
import Menu from '../Menu/component';

import CreateReviewForm from '../CreateReviewForm/component';
import AuthorizationContext from '../../contexts/Authorization';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/selector';
import Reviews from '../Reviews/component';
import { State } from '../../redux';
import { getReviews } from '../../redux/entities/reviews/thunks/get-reviews';
import { selectIsLoading } from '../../redux/ui/request';
import { getDishes } from '../../redux/entities/dishes/thunk/get-dishes';

interface restaurantProbs {
  restaurantId: string;
}

const Restaurant: FC<restaurantProbs> = ({ restaurantId }) => {
  const [requestIdReview, setRequestIdReview] = useState<string>('');
  const isLoadingReview = useSelector((state: State) => selectIsLoading(state, requestIdReview));

  const [requestIdDish, setRequestIdDish] = useState<string>('');
  const isLoadingDish = useSelector((state: State) => selectIsLoading(state, requestIdDish));

  const { user } = useContext(AuthorizationContext);
  const restaurant = useSelector<State, Interfaces.RestaurantsNorm>((state: State) => selectRestaurantById(state, restaurantId));

  const dispatch: any = useDispatch();

  useEffect(() => {
    setRequestIdReview(dispatch(getReviews(restaurantId)).requestId);
    setRequestIdDish(dispatch(getDishes(restaurantId)).requestId);
  }, [restaurantId]);

  return restaurant ? (
    <div>
      <h2>{restaurant.name}</h2>
      <h3>Меню</h3>
      {isLoadingDish ? <div>Loading...</div> : <Menu menu={restaurant.menu} />}
      <h3>Отзывы</h3>
      {isLoadingReview ? <div>Loading...</div> : <Reviews reviewIds={restaurant.reviews} />}
      {user && <CreateReviewForm />}
    </div>
  ) : null;
};

export default Restaurant;
