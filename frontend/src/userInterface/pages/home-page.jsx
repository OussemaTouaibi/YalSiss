import React from 'react';

import Layout from '../components/shared/layout'
import Hero  from '../components/hero/hero'
//import MainSection from '../../userInterface/components/main-section/main-section'
 /*import FeaturedCollection from '../components/featured-collection/featured-collection' */
import ImageSlider from "../components/slider/slider"

const Homepage = () => {

    return(
        <Layout>
            <Hero />
           
            {/*<MainSection />*/} 
            <div className="title">
            <h2>Capuche</h2>
           </div>
            <ImageSlider />
        {/* <FeaturedCollection /> */} 
            
        </Layout>
    )
}

export default Homepage;