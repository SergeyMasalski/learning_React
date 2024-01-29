import { FC } from 'react';
import Interfaces from '../../constants/interfaces';
import Dish from '../Dish/component';

interface menuProps {
  menu: Interfaces.Ingredient[];
}

const Menu: FC<menuProps> = ({ menu }) => {
  return (
    <ul>
      {menu.map(dish => (
        <li>
          <Dish name={dish.name} />
        </li>
      ))}
    </ul>
  );
};

export default Menu;
