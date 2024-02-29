import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.js';
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles.js';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;