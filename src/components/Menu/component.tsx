import { FC } from 'react';
import Interfaces from '../../constants/interfaces';
import Dish from '../Dish/component';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface menuProps {
  menu: Interfaces.Ingredient[];
}

const Menu: FC<menuProps> = ({ menu }) => {
  return (
    <ul className={classNames(styles.root)}>
      {menu.map(dish => (
        <li>
          <Dish name={dish.name} />
        </li>
      ))}
    </ul>
  );
};

export default Menu;
