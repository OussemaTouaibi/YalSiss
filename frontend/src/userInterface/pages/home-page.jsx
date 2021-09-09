import React from 'react';

import Layout from '../components/shared/layout'

import MetaData from '../components/shared/metaData';
import ImageSlider from "../components/slider/slider"
import Slider from '../components/hero/Slider'
import CardFooter from '../components/footer/cardfooter';
import {  useSelector } from 'react-redux'


const Homepage = () => {

    const { user, isAuthenticated, Loading } =  useSelector(state =>state.auth)


    return(
      
        <Layout>
            
            <Slider />
           
            <MetaData title={'Buy Best Products Online'} />
            
            <ImageSlider />
            {!Loading && (!isAuthenticated || user.role !== 'admin') && (
      < CardFooter />
            )}
        </Layout>
    )
}

export default Homepage;