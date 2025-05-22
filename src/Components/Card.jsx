import React from 'react'
import ProductCard from './ProductCard'

import Choco from'../Assets/chocolate-milkshake.jpeg'
import Strawberr from'../Assets/strawberry-milkshake.jpeg'
import Bana from'../Assets/banana-milkshake.jpeg'

const Card = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1 style={{
        fontSize: '36px',
        fontFamily: 'Segoe UI, sans-serif',
        color: 'rgb(123, 52, 52)',
        marginBottom: '30px'
      }}>
        🍨 Sweet Sip Café
      </h1>
  
    <div className='product'>
        <ProductCard 
          image = {Choco}
          name = "Chocolate Milkshake"
          dis_price='$5.70'
          price = '$6.50'
          description = "Rich and creamy chocolate milkshake made with real cocoa, smooth ice cream, and a touch of sweetness. "
        />
        <ProductCard 
           image = {Strawberr}
           name = "Strawberry Milkshake"
           dis_price='$5.25'
           price = '$6.00'
           description = "Sweet and fruity strawberry milkshake made with real strawberries and smooth vanilla ice cream for a refreshing treat."
        />
        <ProductCard 
           image = {Bana}
           name = "Banana Milkshake"
           dis_price='$5.50'
           price = '$6.00'
           description = "Creamy and delicious banana milkshake blended with ripe bananas and rich ice cream for a naturally sweet flavor."
           
        />
    </div>
    </div>
  )
}

export default Card