import { Link } from 'react-router-dom'
import data from '../Data/products.json'

export const Products = () => {
    
    return (
        <div className='div-product'>
            <h2>Our Products</h2>
            {data.map((item) => (
                <div key={item.id} className='map-div'>
                    <Link to={`/products/${item.name}`}><img src={item.image}       alt="" />
                    </Link>
                    <div>
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}