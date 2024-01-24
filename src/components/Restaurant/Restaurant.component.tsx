import { FC } from 'react';
import Interfaces from '../../constants/interfaces';

interface probs {
  restaurant: Interfaces.Restaurant;
}

const Restaurant: FC<probs> = ({ restaurant }: probs) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <h3>Меню</h3>
      <ul>
        {restaurant.menu.map(item => (
          <li>{item.name}</li>
        ))}
      </ul>
      <h3>Отзывы</h3>
      <ul>
        {restaurant.reviews.map(item => (
          <li>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
