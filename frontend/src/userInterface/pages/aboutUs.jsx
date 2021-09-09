import React, { Fragment } from 'react'
import Layout from '../components/shared/layout'
import {Col, Container, Row} from 'reactstrap'
import aboutImg  from '../../assets/t-shirt.png'
import Ou from '../../assets/Oussema.png'
import Ya from '../../assets/Yassine.jpg'

import Vd from '../../assets/video/vd.mp4'

import VV from '../../assets/video/vd1.mp4'

import './aboutUs.scss'

import { useSelector } from 'react-redux'

import CardFooter from '../components/footer/cardfooter';




const About = () => {


  const { user, isAuthenticated, Loading } =  useSelector(state =>state.auth);

    return (
        <Layout>

          <Fragment>
            <div >
        <video
        autoPlay
        loop
        muted
        style={{width:'100%'}}
        >
       
          <source src={Vd} type="video/mp4" />
         
        </video>
     
        </div>
        <div >
        <video
        autoPlay
        loop
        muted
        style={{width:'100%'}}
        >
       
          <source src={VV} type="video/mp4" />
         
        </video>
     
        </div>
            </Fragment>

       
<Fragment>
            <div className="intro">
              <div className="intro-content" >  
              <h2 className="intro-title">What is YalSiss ?</h2>
              <br></br>
              <p className="intro-text">Our project aims to 9ouwa 9ouwa 9ouwa 9ouwa 9ouwa 9ouwa9ouwa 9ouwa9ouwa 9ouwa9ouwa 9ouwa9ouwa9ouwa 9ouwa9ouwa .</p>
              </div>
            </div>
            <div className="About">
              <h2 className="about-title">
                About us
              </h2>
              <Row>
                <Col md="6">
                      <div className="about-item">
                        <h3 className="about-item-title">Our goals</h3>
                        <br></br>
                        <p className="about-item-text">Our project aims to 9ouwa 9ouwa 9ouwa 9ouwa 9ouwa 9ouwa9ouwa 9ouwa9ouwa 9ouwa9ouwa 9ouwa9ouwa9ouwa 9ouwa9ouwa ..</p>
                      </div>
                </Col>
                <Col md="6">
                  <div className="about-item">
                        <h3 className="about-item-title">Solution</h3>
                        <br></br>
                        <p className="about-item-text">Our project aims to 9ouwa 9ouwa 9ouwa 9ouwa 9ouwa 9ouwa9ouwa 9ouwa9ouwa 9ouwa9ouwa 9ouwa9ouwa9ouwa 9ouwa9ouwa .</p>
                      </div>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md="6">
                      <div className="about-item">
                        <h3 className="about-item-title">State of art</h3>
                        <br></br>
                        <p className="about-item-text">Our project aims to 9ouwa 9ouwa 9ouwa 9ouwa 9ouwa 9ouwa9ouwa 9ouwa9ouwa 9ouwa9ouwa 9ouwa9ouwa9ouwa 9ouwa9ouwa .</p>
                      </div>
                </Col>               
              </Row>
              <div className="about-img">
                <img src={aboutImg}/>
              </div>
            </div>
            </Fragment>
            <Fragment>
          <section className="our-team light-gray-bg padding-top-100 padding-bottom-100">
      <div className="container">
        <div className="heading text-center">
          <h4>Our Team</h4>
          <hr/>
        </div>
        
       
        <ul className="row">
          
         
          <li className="col-md-6 text-center animate fadeInUp" data-wow-delay="0.4s">
            <article> 
         
              <div className="avatar"> <img className="img-circle" src={Ya} alt="" /> 
              <div className="team-hover">
                  <div className="position-center-center">
                    <div className="social-icons"> <a href="#."><i className="icon-social-facebook"></i></a> <a href="#."><i className="icon-social-twitter"></i></a> <a href="#."><i className="icon-social-dribbble"></i></a> </div>
                  </div>
                </div>
              </div>
        
              <div className="team-names">
                <h6>Yassine Kadri</h6>
                <p>CEO & FOUNDER</p>
              </div>
            </article>
          </li>
          
     
          <li className="col-md-6 text-center animate fadeInUp" data-wow-delay="0.8s">
            <article> 
        
              <div className="avatar"> <img className="img-circle" src={Ou} alt="" /> 
             
                <div className="team-hover">
                  <div className="position-center-center">
                    <div className="social-icons"> <a href="#."><i className="icon-social-facebook"></i></a> <a href="#."><i className="icon-social-twitter"></i></a> <a href="#."><i className="icon-social-dribbble"></i></a> </div>
                  </div>
                </div>
              </div>
           
              <div className="team-names">
                <h6>Oussema Touaibi</h6>
                <p>DESIGNER & DEVELOPER</p>
              </div>
            </article>
          </li> 
        </ul>
      </div>
    </section>

          </Fragment>
            {!Loading && (!isAuthenticated || user.role !== 'admin') && (
              <CardFooter />
              )}
              
              
        </Layout>
      )
}
export default About;
