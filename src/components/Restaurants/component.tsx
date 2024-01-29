import { FC } from 'react';
import Interfaces from '../../constants/interfaces';
import Restaurant from '../Restaurant/component';

interface restaurantsProps {
  restaurants: Interfaces.Restaurant[];
}

const Restaurants: FC<restaurantsProps> = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((restaurant: Interfaces.Restaurant) => (
        <Restaurant restaurant={restaurant} />
      ))}
    </div>
  );
};

export default Restaurants;
