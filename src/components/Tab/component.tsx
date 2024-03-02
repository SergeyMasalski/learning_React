import { FC } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

import Interfaces from '../../constants/interfaces';

interface Props {
  restaurant: Interfaces.Restaurant;
  setSelectedRestaurant: (value: Interfaces.Restaurant) => void;
}

const Tab: FC<Props> = ({ restaurant, setSelectedRestaurant }) => {
  return (
    <button
      onClick={() => setSelectedRestaurant(restaurant)}
      className={classNames(styles.namesRestaurants)}
    >
      {restaurant.name}
    </button>
  );
};

export default Tab;
