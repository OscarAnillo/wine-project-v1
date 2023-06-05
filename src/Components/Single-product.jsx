import PropTypes from 'prop-types'

export const SingleProduct = ({ product }) => {
    
    const {image, name, price, desc} = product
    return (
        <div className='single-div'>
            <h2>Product</h2>
            <img src={`/${image}`} alt="" />
            <div className='single-row'>
                <h2>{name}</h2>
                <p>${price}</p>
            </div>
            <p className='single-div-desc'>{desc}</p>
        </div>
    )
}

SingleProduct.propTypes = {
    product: PropTypes.object
}