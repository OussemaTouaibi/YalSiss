import React, { Fragment, useState, useEffect } from 'react'
import Layout from '../components/shared/layout'
import './home-page2.scss'
import Product from '../components/product/product'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/productActions'

const Homepage2 = () => {

  const dispatch = useDispatch();

  const { loading, products, error, productsCount } = useSelector(state => state.products)
  useEffect(() => {

    dispatch(getProducts());

  }, [dispatch])

    return(
   
        <Layout>
          {loading ? <h1>Loading...</h1> : (
              <Fragment>
                 <div className = 'container container-fluid'>

<h1 id = "products_heading">Latest Products</h1>

<section id = "products" className = "container mt-5">

    <div className = "row">

      {products && products.map(product =>(
            < Product key = {product._id}  product={product} /> 
      

      ))}

</div>
</section>

    
    </div>  

              </Fragment>

          )}
         
        </Layout>
        
    )
}

export default Homepage2;