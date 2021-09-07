import React from 'react';

import Layout from '../components/shared/layout'
import Hero  from '../components/hero/hero'
import MetaData from '../components/shared/metaData';
import ImageSlider from "../components/slider/slider"
import Slider from '../components/hero/Slider'


const Homepage = () => {

    return(
      
        <Layout>
            
            <Slider />
           
            <MetaData title={'Buy Best Products Online'} />
            
            <ImageSlider />
  
      
        </Layout>
    )
}

export default Homepage;