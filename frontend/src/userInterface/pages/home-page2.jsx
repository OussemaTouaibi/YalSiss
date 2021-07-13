import React from 'react';

import Layout from '../components/shared/layout'

import './home-page2.scss'

const Homepage2 = () => {

    return(
        <Layout>
          <div classNameName='container container-fluid'>
          <h1 id="products_heading">Latest Products</h1>
          <section id="products" className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="cardd p-3 rounded">
            <img
              className="cardd-img-top mx-auto"
              src="https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"
            />
            <div className="cardd-body d-flex flex-column">
              <h5 className="cardd-title">
                <a href="">128GB Solid Storage Memory cardd - SanDisk Ultra</a>
              </h5>
              <div classNameName="ratings mt-auto">
                <div classNameName="rating-outer">
                  <div className="rating-inner"></div>
                </div>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <p className="cardd-text">$45.67</p>
              <a href="#" id="view_btn" className="btn btn-block">View Details</a>
            </div>
          </div>
        </div>

  
      
      </div>
    </section>
              
              
              
              </div>  
           

            
        </Layout>
    )
}

export default Homepage2;