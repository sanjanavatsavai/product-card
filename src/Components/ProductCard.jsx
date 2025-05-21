import React from 'react'
import './ProductCard.css'

import Image from '../Assets/chocolate-milkshake.jpeg'

const ProductCard = () => {
  return (
    <div className='product_box'>
        <img src={Image} alt="" />
        <div className="description">
            <h2>Chocolate Milkshake</h2>
            <p className='price'>$5.00<span>$7.00</span></p>
            <p className='para'>Rich, creamy chocolate milkshake made with real cocoa and velvety ice cream.</p>
            <button className='btn'>Buy Now</button>
        </div>
        
    </div>
  )
}

export default ProductCard