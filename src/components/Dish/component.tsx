import { FC, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/selector';
import Interfaces from '../../constants/interfaces';

interface dishProps {
  dishId: string;
}

const Dish: FC<dishProps> = ({ dishId }) => {
  let [countDishes, setcountDishes] = useState<number>(0);

  const dish = useSelector<unknown, Interfaces.DishNorm>((state: unknown) => selectDishById(state, dishId));

  return (
    <div className={classNames(styles.root)}>
      <div>{dish.name}</div>
      <div className={classNames(styles.addToBasket)}>
        <button
          onClick={() => {
            if (countDishes === 5) return;
            setcountDishes(countDishes + 1);
          }}
          disabled={countDishes === 5}
          className={classNames(styles.addDish, { [styles.isDisabled]: countDishes === 5 })}
        >
          +
        </button>
        <div>{countDishes}</div>
        <button
          onClick={() => {
            if (countDishes === 0) return;
            setcountDishes(countDishes - 1);
          }}
          disabled={countDishes === 0}
          className={classNames(styles.subDish, { [styles.isDisabled]: countDishes === 0 })}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Dish;
