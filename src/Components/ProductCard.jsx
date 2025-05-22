import React from 'react'
import './ProductCard.css'


const ProductCard = (props) => {
  return (
    <div className='product_box'>
        <img src={props.image} alt="" />
        <div className="description">
            <h2>{props.name}</h2>
            <p className='price'>{props.dis_price}<span>{props.price}</span></p>
            <p className='para'>{props.description}</p>
            <button className='btn'>Buy Now</button>
        </div>
        
    </div>
  )
}

export default ProductCard