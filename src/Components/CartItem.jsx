import {useContext} from 'react'
import CartContext from '../context/CartContext'

const CartItem = ({ item })=> {
    const { removeItem } = useContext(CartContext)
    return(
        <div>
            <li className='cartItem-item'>
                <img src={item.image} alt='' />
                <div>
                    {item.name} $ {item.price}
                </div>
                <button 
                className='cartItem-button' 
                onClick={() => removeItem(item._id)}>
                Remove
                </button>
            </li>
        </div>
    )
}

export default CartItem