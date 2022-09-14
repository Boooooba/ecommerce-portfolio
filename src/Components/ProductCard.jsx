import Rating from './Rating'
import { useContext } from 'react'
import CartContext from '../context/CartContext'

const ProductCard = ({ product })=> {

    const {addToCart} = useContext(CartContext)

    return(
        <div className='product-card-wrapper'>
            <div>
                <img src={product.image} alt='' className='product-card-img' />
                <h4>{product.name}</h4>
                <div className='product-card-price'>
                    <h5>$ {product.price}</h5>
                </div>
                <div className='product-card-rating'>
                    <Rating 
                    value={product.rating} 
                    text={`${product.numReviews} reviews`} />
                </div>
                <button 
                className='product-card-button' 
                onClick={() => addToCart(product)}>
                Add to Basket
                </button>
            </div>
        </div>
    )
}

export default ProductCard