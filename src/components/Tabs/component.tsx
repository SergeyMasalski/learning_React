import { FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import Interfaces from '../../constants/interfaces';

interface Props {
  restaurants: Interfaces.Restaurant[];
  setSelectedRestaurant: (value: Interfaces.Restaurant) => void;
}

const Tabs: FC<Props> = ({ restaurants, setSelectedRestaurant }) => {
  return (
    <div className={classNames(styles.root)}>
      {restaurants.map((restaurant: Interfaces.Restaurant) => (
        <button
          onClick={() => {
            const selected = restaurants.find(({ id }) => id === restaurant.id);
            if (selected) setSelectedRestaurant(selected);
          }}
          className={classNames(styles.namesRestaurants)}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
