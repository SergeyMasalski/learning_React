import { FC, useState } from 'react';
import Restaurant from '../Restaurant/component';
import Tabs from '../Tabs/component';
import styles from './styles.module.scss';
import classNames from 'classnames';

import Interfaces from '../../constants/interfaces';

interface restaurantsProps {}

const Restaurants: FC<restaurantsProps> = ({}) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Interfaces.Restaurant | null>(null);

  {
    return (
      <div className={classNames(styles.root)}>
        <Tabs setSelectedRestaurant={setSelectedRestaurant} />
        {selectedRestaurant ? <Restaurant restaurant={selectedRestaurant} /> : null}
      </div>
    );
  }
};

export default Restaurants;
