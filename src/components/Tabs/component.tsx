import { FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

import Tab from '../Tab/component';

import Interfaces from '../../constants/interfaces';
import { useGetRestaurantsQuery } from '../../redux/servises/api';

interface Props {
  setSelectedRestaurant: (value: Interfaces.Restaurant | null) => void;
}

const Tabs: FC<Props> = ({ setSelectedRestaurant }) => {
  const { isLoading, data: restaurants } = useGetRestaurantsQuery();

  if (isLoading) return <div>Loading...</div>;

  if (restaurants)
    return (
      <div className={classNames(styles.root)}>
        {restaurants.map((restaurant: Interfaces.Restaurant) => (
          <Tab
            restaurant={restaurant}
            setSelectedRestaurant={setSelectedRestaurant}
            key={restaurant.id}
          />
        ))}
      </div>
    );
};

export default Tabs;
