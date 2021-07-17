import React, { Fragment, useState, useEffect } from 'react'
import Pagination from 'react-js-pagination'

import Layout from '../components/shared/layout'
import Product from '../components/product/product'
import Loader from '../components/shared/loader'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'

import { getProducts } from '../../actions/productActions'


import './home-page2.scss'


const Homepage2 = () => {

  const [currentPage, setCurrentPage] = useState(1)


  const dispatch = useDispatch();
  const alert = useAlert();
  
  const { loading, products, error, productsCount, resPerPage } = useSelector(state => state.products)
  useEffect(() => {

    if(error) {

      return  alert.error(error)
     }
    dispatch(getProducts(currentPage));

  }, [dispatch, alert, error, currentPage])

    function setCurrentPageNo(pageNumber)
     {
    setCurrentPage(pageNumber)

      }


    return(
   
        <Layout>
          {loading ? <Loader /> : (
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
        {resPerPage <= productsCount && (

       
                <div className="d-flex justify-content-center mt-5">
                             <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resPerPage}
                                totalItemsCount={productsCount}
                                onChange={setCurrentPageNo}
                                nextPageText={'Next'}
                                prevPageText={'Prev'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        </div>
                         )}
              </Fragment>

          )}
         
        </Layout>
        
    )
}

export default Homepage2;