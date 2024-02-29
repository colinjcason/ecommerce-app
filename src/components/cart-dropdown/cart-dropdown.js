import React from 'react';
import CartItem from '../cart-item/cart-item';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button';

import './cart-dropdown.styles.js';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.js';

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('./checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        { cartItems.length ? (cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        ) 
      }
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
};

export default CartDropdown;