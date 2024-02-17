import { FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

import Tab from '../Tab/component';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurants/selector';

interface Props {
  setSelectedRestaurant: (value: string) => void;
}

const Tabs: FC<Props> = ({ setSelectedRestaurant }) => {
  const restaurantsIds = useSelector(selectRestaurantIds);

  return (
    <div className={classNames(styles.root)}>
      {restaurantsIds.map((restaurantId: string) => (
        <Tab restaurantId={restaurantId} setSelectedRestaurant={setSelectedRestaurant} />
      ))}
    </div>
  );
};

export default Tabs;
