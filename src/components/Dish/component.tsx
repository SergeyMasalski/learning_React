import { FC } from 'react';

interface dishProps {
  name: string;
}

const Dish: FC<dishProps> = ({ name }) => {
  return <div>{name}</div>;
};

export default Dish;
