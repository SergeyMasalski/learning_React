import { FC } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/selector';

interface Props {
  restaurantId: string;
  setSelectedRestaurant: (value: string) => void;
}

const Tab: FC<Props> = ({ restaurantId, setSelectedRestaurant }) => {
  const restaurant = useSelector((state: any) => selectRestaurantById(state, restaurantId));

  return (
    <button onClick={() => setSelectedRestaurant(restaurantId)} className={classNames(styles.namesRestaurants)}>
      {restaurant.name}
    </button>
  );
};

export default Tab;
