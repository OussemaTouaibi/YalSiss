import React from 'react';

import Layout from '../components/shared/layout'
import Hero  from '../components/hero/hero'
import MetaData from '../components/shared/metaData';
import ImageSlider from "../components/slider/slider"

const Homepage = () => {

    return(
      
        <Layout>
            
            <Hero />
           
            <MetaData title={'Buy Best Products Online'} />
            
            <ImageSlider />
  
            
        </Layout>
    )
}

export default Homepage;