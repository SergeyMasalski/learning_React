import { FC } from 'react';
import Dish from '../Dish/component';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface menuProps {
  menu: string[];
}

const Menu: FC<menuProps> = ({ menu }) => {
  return (
    <ul className={classNames(styles.root)}>
      {menu.map(dishId => (
        <li>
          <Dish dishId={dishId} />
        </li>
      ))}
    </ul>
  );
};

export default Menu;
