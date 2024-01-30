import { FC, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface dishProps {
  name: string;
}

const Dish: FC<dishProps> = ({ name }) => {
  let [countDishes, setcountDishes] = useState<number>(0);
  return (
    <div className={classNames(styles.root)}>
      <div>{name}</div>
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
