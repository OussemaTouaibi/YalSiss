import React, { Fragment, useState} from 'react'
import { Link } from 'react-router-dom'

import MetaData from '../../components/shared/metaData'
import Layout from '../../components/shared/layout'
import './cart.scss'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, removeItemFromCart } from '../../../actions/cartActions'
import { getProductDetails, clearErrors } from '../../../actions/productActions'



const Cart = ({ history }) => {

    const color = ["Black", "Brown", "Silver", "White", "Blue"]

    const [colors, setColors] = useState([]);
    const [size, setSize] = useState('');

    const { loading, error, product } = useSelector(state => state.productDetails)

    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.cart)

    const removeCartItemHandler = (id) => {
        dispatch(removeItemFromCart(id))
    }

    const increaseQty = (id, quantity, stock) => {
        const newQty = quantity + 1;

        if (newQty > stock) return;

        dispatch(addItemToCart(id, newQty))
    }

    const decreaseQty = (id, quantity) => {

        const newQty = quantity - 1;

        if (newQty <= 0) return;

        dispatch(addItemToCart(id, newQty))

    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }



    return (
        <Layout>
        <Fragment>
            <MetaData title={'Your Cart'} />
            {cartItems.length === 0 ? <>
            <div className="nnn"></div>
            <img className="my-5 img-fluid d-block mx-auto" src="/images/empty.jpg" alt="Empty" width="80" height="80" />
            <h2 className="mama">Votre panier est vide.</h2>  </>: (
                <Fragment>
                    <h2 className="mt-5">Your Cart: <b>{cartItems.length} items</b></h2>

                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8">

                            {cartItems.map(item => (
                                <Fragment>
                                    <hr />

                                    <div className="cart-item" key={item.product}>
                                        <div className="row">
                                            <div className="col-4 col-lg-3">
                                                <img src={item.image} alt="product" height="90" width="115" />
                                            </div>

                                            <div className="col-5 col-lg-3">
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            </div>


                                            <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                                <p id="card_item_price">{item.price}DT</p>
                                            </div>
                                           
                    <div className="col-4 col-lg-2 mt-4 mt-lg-0" >

                    <select
            onChange={(e)=>e.target.value}
            name="color"
            className="form-control"
          >
            {product.color ? (
              <option value={product.color}>{product.color}</option>
            ) : (
              <option>Size</option>
            )}
            {color
              .filter((c) => c !== product.color)
              .map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
          </select>
           
                                </div>

                                    
                                <div className="col-2 col-lg-6 mt-4 mt-lg-6" >
                                    <input 
                                   
                                    placeholder="Size XL or 40 .."
                                    ></input>
                                </div>
                        
                        

                                            <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                                <div className="stockCounter d-inline">
                                                    <span className="btn btn-danger minus" onClick={() => decreaseQty(item.product, item.quantity)}>-</span>

                                                    <input type="number" className="form-control count d-inline" value={item.quantity} readOnly />

                                                    <span className="btn btn-primary plus" onClick={() => increaseQty(item.product, item.quantity, item.stock)}>+</span>
                                                </div>
                                            </div>

                                            <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                                <i id="delete_cart_item" className="fa fa-trash btn btn-danger" onClick={() => removeCartItemHandler(item.product)} ></i>
                                            </div>

                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>
                            ))}

                        </div>

                        <div className="col-12 col-lg-3 my-4">
                            <div id="order_summary">
                                <h4>Order Summary</h4>
                                <hr />
                                <p>Subtotal:  <span className="order-summary-values">{cartItems.reduce((acc, item) => (acc + Number(item.quantity)), 0)} (Units)</span></p>
                                <p>Est. total: <span className="order-summary-values">{cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}DT</span></p>

                                <hr />
                                <button id="checkout_btn" 
                                className="btn btn-primary btn-block"
                                 onClick={checkoutHandler}
                                 >Check out</button>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
        </Layout>
    )

}

export default Cart