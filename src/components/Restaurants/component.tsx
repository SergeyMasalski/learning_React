import { FC, useState } from 'react';
import Interfaces from '../../constants/interfaces';
import styles from './styles.module.scss';
import classNames from 'classnames';
import Restaurant from '../Restaurant/component';

interface restaurantsProps {
  restaurants: Interfaces.Restaurant[];
}

const Restaurants: FC<restaurantsProps> = ({ restaurants }) => {
  let [selectedRestaurant, setSelectedRestaurant] = useState<Interfaces.Restaurant>(restaurants[0]);

  return (
    <div>
      <div className={classNames(styles.container)}>
        {restaurants.map((restaurant: Interfaces.Restaurant) => (
          <button
            onClick={() => {
              const selected = restaurants.find(rest => rest.id === restaurant.id);
              if (selected) setSelectedRestaurant(selected);
            }}
            className={classNames(styles.namesRestaurants)}
          >
            {restaurant.name}
          </button>
        ))}
      </div>
      <Restaurant restaurant={selectedRestaurant} />
    </div>
  );
};

export default Restaurants;
