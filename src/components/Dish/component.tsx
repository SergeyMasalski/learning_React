import { Dispatch, FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/selector';
import Interfaces from '../../constants/interfaces';
import { decrementDish, incrementDish, selectDishAnountById } from '../../redux/ui/cart';
import { State } from '../../redux';
import { UnknownAction } from '@reduxjs/toolkit';

interface dishProps {
  dishId: string;
}

const Dish: FC<dishProps> = ({ dishId }) => {
  const countDishesRedux = useSelector<State, number>((state: State) => selectDishAnountById(state, dishId));

  const dispatch: Dispatch<UnknownAction> = useDispatch();

  const dish = useSelector<State, Interfaces.DishNorm>((state: State) => selectDishById(state, dishId));

  return dish ? (
    <div className={classNames(styles.root)}>
      <div>{dish.name}</div>
      <div className={classNames(styles.addToBasket)}>
        <button
          onClick={() => {
            if (countDishesRedux === 0) return;
            dispatch(decrementDish(dishId));
          }}
          disabled={countDishesRedux === 0}
          className={classNames(styles.subDish, { [styles.isDisabled]: countDishesRedux === 0 })}
        >
          -
        </button>
        <div>{countDishesRedux}</div>
        <button
          onClick={() => {
            if (countDishesRedux === 5) return;
            dispatch(incrementDish(dishId));
          }}
          disabled={countDishesRedux === 5}
          className={classNames(styles.addDish, { [styles.isDisabled]: countDishesRedux === 5 })}
        >
          +
        </button>
      </div>
    </div>
  ) : null;
};

export default Dish;
