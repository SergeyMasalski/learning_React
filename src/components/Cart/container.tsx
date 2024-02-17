import { FC } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../redux';

import CartComponent from './component';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { selectCartDishIds } from '../../redux/ui/cart';
import { ICoordinates } from '../CartButton/component';

interface Props {
  coordinates: ICoordinates | null;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartContainer: FC<Props> = ({ onClose, coordinates }) => {
  const dishIds = useSelector<State, string[]>(selectCartDishIds);

  return coordinates ? (
    <div style={coordinates} className={classNames(styles.root)}>
      <CartComponent dishIds={dishIds} />
      <button className={classNames(styles.close)} onClick={() => onClose(false)}>
        Close
      </button>
    </div>
  ) : null;
};

export default CartContainer;
