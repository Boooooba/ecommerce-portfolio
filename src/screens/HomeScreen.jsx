import products from '../data'
import ProductCard from '../Components/ProductCard'

const HomeScreen = ()=> {
    return(
        <div className='products-wrapper'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default HomeScreen