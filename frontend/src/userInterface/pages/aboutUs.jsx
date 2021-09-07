import React from 'react'
import Layout from '../components/shared/layout'
import {Col, Container, Row} from 'reactstrap'
import aboutImg  from '../../assets/t-shirt.png'
import './aboutUs.scss'


const About = () => {
    return (
        <Layout>
           
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
        </Layout>
      )
}
export default About;
