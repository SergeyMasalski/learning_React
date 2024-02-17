import { FC, useEffect, useState } from 'react';
import Restaurant from '../Restaurant/component';
import Tabs from '../Tabs/component';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurants/selector';
import { getRestaurants } from '../../redux/entities/restaurants/thunks/get-restaurants';
import { selectIsLoading } from '../../redux/ui/request';

interface restaurantsProps {}

const Restaurants: FC<restaurantsProps> = ({}) => {
  const [requestId, setRequestId] = useState<string>('');

  const restaurants = useSelector(selectRestaurantIds);
  const isLoading = useSelector<any, boolean>(state => selectIsLoading(state, requestId));
  const [selectedRestaurant, setSelectedRestaurant] = useState<string>(restaurants[0]);

  const dispatch: any = useDispatch();

  useEffect(() => {
    setRequestId(dispatch(getRestaurants()).requestId);
  }, []);

  {
    return isLoading ? (
      <div className={classNames(styles.root)}>Loading...</div>
    ) : (
      <div className={classNames(styles.root)}>
        <Tabs setSelectedRestaurant={setSelectedRestaurant} />
        <Restaurant restaurantId={selectedRestaurant} />
      </div>
    );
  }
};

export default Restaurants;
