import { FC, useState } from 'react';
import Interfaces from '../../constants/interfaces';
import Restaurant from '../Restaurant/component';
import Tabs from '../Tabs/component';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface restaurantsProps {
  restaurants: Interfaces.Restaurant[];
}

const Restaurants: FC<restaurantsProps> = ({ restaurants }) => {
  let [selectedRestaurant, setSelectedRestaurant] = useState<Interfaces.Restaurant>(restaurants[0]);

  return (
    <div className={classNames(styles.root)}>
      <Tabs restaurants={restaurants} setSelectedRestaurant={setSelectedRestaurant} />
      <Restaurant restaurant={selectedRestaurant} />
    </div>
  );
};

export default Restaurants;
