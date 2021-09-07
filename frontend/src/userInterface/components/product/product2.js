import React from 'react'
import { Link } from 'react-router-dom'
import './product2.scss'

const Product2 = ({ product }) => {
return (
    
        <div className="cardz" key={product.id}>
            <div className="cardz_img">
                <img src={product.images[0].url} />
            </div>
            <div className="cardz_header">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p className="price">{product.price}<span>DT</span></p>
                <div className="btnz">Add to cart</div>
            </div>
        </div>
  


    )
}


export default Product2;
