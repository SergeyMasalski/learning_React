import { FC, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import CartContainer from '../Cart/container';

interface Props {
  amount: number;
}

export interface ICoordinates {
  left: number;
  top: number;
}

const CartButtonComponent: FC<Props> = ({ amount }) => {
  let [coordinates, setCoordinates] = useState<null | ICoordinates>(null);
  let [isVisible, setIsVisible] = useState<boolean>(false);
  const popoverContainer = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    popoverContainer.current = document.getElementById('popover-container');
  }, []);

  function openCart(): void {
    setIsVisible(true);
    const info = buttonRef.current?.getBoundingClientRect();

    if (info) {
      const { left, top } = info;
      setCoordinates({ left, top });
    }
  }

  return (
    <div className={classNames(styles.rootComponent)}>
      <button ref={buttonRef} onClick={() => openCart()} className={classNames(styles.cartIcon)}></button>
      <div className={classNames(styles.amount)}>{amount}</div>
      {isVisible && popoverContainer.current && createPortal(<CartContainer coordinates={coordinates} onClose={setIsVisible} />, popoverContainer.current)}
    </div>
  );
};

export default CartButtonComponent;
