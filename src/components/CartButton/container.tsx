import { FC } from 'react';
import CartButtonComponent from './component';
import { useSelector } from 'react-redux';
import { selectDishAnount } from '../../redux/ui/cart';

interface Props {}

const CartButtonContainer: FC<Props> = ({}) => {
  const amount = useSelector(selectDishAnount);

  return (
    <div>
      <CartButtonComponent amount={amount} />
    </div>
  );
};

export default CartButtonContainer;
