import { FC, useState } from 'react';
import Restaurant from '../Restaurant/component';
import Tabs from '../Tabs/component';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurants/selector';

interface restaurantsProps {}

const Restaurants: FC<restaurantsProps> = ({}) => {
  const restaurants = useSelector(selectRestaurantIds);
  let [selectedRestaurant, setSelectedRestaurant] = useState<string>(restaurants[0]);

  return (
    <div className={classNames(styles.root)}>
      <Tabs setSelectedRestaurant={setSelectedRestaurant} />
      <Restaurant restaurantId={selectedRestaurant} />
    </div>
  );
};

export default Restaurants;
