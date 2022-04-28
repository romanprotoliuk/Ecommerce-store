import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"

import CartIcon from "../../../componets/cart-icon/cart-icon.component"
import CartDropdown from "../../../componets/cart-dropdown/cart.dropdown.component"

import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'
import { UserContext } from "../../../contexts/user.context"
import { CartContext } from "../../../contexts/cart.context"

import { signOutUser } from "../../../utils/firebase/firebase.utils"

import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
            ) : (
              <Link className="nav-link" to='/auth'>
                SIGN IN
              </Link>
            )
          }
          <CartIcon />
        </div>
        {/* components are always truthy values, statement below says "if both are true return  rightmost component" isCartOpen will just exit */}
        {isCartOpen &&  <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation