import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import Button from '../button/button.component'
import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles'
import CartItem from '../cart-item/cart-item.component'

import { useSelector } from 'react-redux'
import { selectCategoriesMap } from '../../store/categories/category.selector'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const categoriesMap = useSelector(selectCategoriesMap)
  console.log(categoriesMap)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (cartItems.map((item => <CartItem key={item.id} cartItem={item} />))) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
        }
        
      </CartItems>
      <Button onClick={goToCheckoutHandler} >Go to checkout</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown