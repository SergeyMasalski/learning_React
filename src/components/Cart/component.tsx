import { FC } from 'react';
import Dish from '../Dish/component';
import styles from './styles.module.scss';

interface Props {
  dishIds: string[];
}

const CartComponent: FC<Props> = ({ dishIds }) => {
  return (
    <div className={styles.rootComponent}>
      {dishIds.map(id => (
        <Dish dishId={id} />
      ))}
    </div>
  );
};

export default CartComponent;
