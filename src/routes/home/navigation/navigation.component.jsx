import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"

import CartIcon from "../../../componets/cart-icon/cart-icon.component"
import CartDropdown from "../../../componets/cart-dropdown/cart.dropdown.component"

import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'
import { UserContext } from "../../../contexts/user.context"
import { CartContext } from "../../../contexts/cart.context"

import { signOutUser } from "../../../utils/firebase/firebase.utils"

import {NavigationContainer, NavLink, NavLinks, LogoContainer} from './navigation.styles'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
            ) : (
              <NavLink to='/auth'>
                SIGN IN
              </NavLink>
            )
          }
          <CartIcon />
        </NavLinks>
        {/* components are always truthy values, statement below says "if both are true return  rightmost component" isCartOpen will just exit */}
        {isCartOpen && <CartDropdown />} 
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation