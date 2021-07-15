import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../slider/1.css.map"
import "../slider/1.scss"

function ImageSlider() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <>
        <div className="title">
            <h2>Capuche</h2>
           </div>
        <Slider {...settings}>
        
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="../images/1.jpg" />
                    </div>
                
                    <div className="details">
                        <h2>Hip9ouwa<span className="job-title">45 DT</span></h2>
                    </div>
                </div>
                </div>
            
       
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/2.jpg" />
                    </div>
                    
                    <div className="details">
                        <h2>Hip9ouwa <span className="job-title">35 DT</span></h2>
                    </div>
                </div>
            </div>
         
            
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/3.jpg" />
                    </div>
                    
                    <div className="details">
                        <h2>Hip9ouwa<span className="job-title">40 DT</span></h2>
                    </div>
                </div>
            </div>
           
      
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/4.jpg" />
                    </div>
                    
                    <div className="details">
                        <h2>Hip9ouwa<span className="job-title">50 DT</span></h2>
                    </div>
                </div>
            </div>
          
            
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/5.jpg" />
                    </div>
                    
                    <div className="details">
                        <h2> Hip9ouwa<span className="job-title">60 DT</span></h2>
                    </div>
                </div>
            </div>
           
        
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/6.jpg" />
                    </div>
                    
                    <div className="details">
                        <h2>Hip9ouwa<span className="job-title">8000 DT</span></h2>
                    </div>
                </div>
            </div>
        
        </Slider>
        <div className="title">
        <h2>Montre</h2>
        </div>
        <Slider {...settings}>
       
        <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="../images/20.jpg" />
                    </div>
                
                    <div className="details">
                        <h2>Hip9ouwa<span className="job-title">45 DT</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/21.jpg" />
                    </div>
                    
                    <div className="details">
                        <h2>Hip9ouwa <span className="job-title">35 DT</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/22.jpg" />
                    </div>
                    
                    <div className="details">
                        <h2>Hip9ouwa<span className="job-title">40 DT</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/23.jpg" />
                    </div>
                    
                    <div className="details">
                        <h2>Hip9ouwa<span className="job-title">50 DT</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/24.jpg" />
                    </div>
                    
                    <div className="details">
                        <h2> Hip9ouwa<span className="job-title">60 DT</span></h2>
                    </div>
                </div>
            </div>
          
                </Slider>

            <div className="title">
            <h2>Parfums</h2>
            </div>

                <Slider {...settings}>
       
       <div className="card-wrapper">
               <div className="card">
                   <div className="card-image">
                       <img src="../images/30.jpg" />
                   </div>
               
                   <div className="details">
                       <h2>Hip9ouwa<span className="job-title">45 DT</span></h2>
                   </div>
               </div>
           </div>
           <div className="card-wrapper">
               <div className="card">
                   <div className="card-image">
                       <img src="images/31.jpg" />
                   </div>
                   
                   <div className="details">
                       <h2>Hip9ouwa <span className="job-title">35 DT</span></h2>
                   </div>
               </div>
           </div>
           <div className="card-wrapper">
               <div className="card">
                   <div className="card-image">
                       <img src="images/32.jpg" />
                   </div>
                   
                   <div className="details">
                       <h2>Hip9ouwa<span className="job-title">40 DT</span></h2>
                   </div>
               </div>
           </div>
           <div className="card-wrapper">
               <div className="card">
                   <div className="card-image">
                       <img src="images/33.jpg" />
                   </div>
                   
                   <div className="details">
                       <h2>Hip9ouwa<span className="job-title">50 DT</span></h2>
                   </div>
               </div>
           </div>
           <div className="card-wrapper">
               <div className="card">
                   <div className="card-image">
                       <img src="images/34.jpg" />
                   </div>
                   
                   <div className="details">
                       <h2> Hip9ouwa<span className="job-title">60 DT</span></h2>
                   </div>
               </div>
           </div>
         
               </Slider>
        </>
    )
}

export default ImageSlider