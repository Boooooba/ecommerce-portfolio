import { useContext } from 'react'
import CartContext from '../context/CartContext'

const Nav = ()=> {

const { cartItems, showHideCart } = useContext( CartContext )

    return(
        <nav>
            <div className='nav-left'>Store</div>
            <div className='nav-middle'>
                <div className='input-wrapper'>
                    <input type='text' />
                    <i className='fa fa-search' />
                </div>
            </div>
            <div className='nav-right'>
                <div className='cart-icon'>
                    <i 
                    className='fa fa-shopping-cart' 
                    aria-hidden='true' 
                    onClick={showHideCart} />
                    {cartItems.length > 0 && (
                        <div className='item-count'>
                            <span>{cartItems.length}</span>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Nav