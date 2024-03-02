import { FC } from 'react';
import Dish from '../Dish/component';
import styles from './styles.module.scss';
import classNames from 'classnames';
import Interfaces from '../../constants/interfaces';

interface menuProps {
  menu: Interfaces.Dish[] | undefined;
}

const Menu: FC<menuProps> = ({ menu }) => {
  if (menu)
    return (
      <ul className={classNames(styles.root)}>
        {menu.map(({ id }) => (
          <li key={id}>
            <Dish dishId={id} />
          </li>
        ))}
      </ul>
    );
};

export default Menu;
