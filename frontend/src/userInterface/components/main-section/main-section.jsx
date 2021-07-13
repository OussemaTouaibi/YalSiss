import React from 'react';
import { withRouter } from 'react-router-dom';
import yeezy from '../../../assets/main-section/yeezy.jpg';
import './main-section.styles.scss'


const MainSection = ({ history }) => {
    return (
        <div className='main-section-container'>
            <div className='main-section-middle'>
                <div className='ms-m-image'>
                    <img src={yeezy} alt='yeezy pair of shoes'/>
                </div>
                <div className='ms-m-description'>
                    <h2>Designed for fashion. Crafted for sport.</h2>
                    <p>
                    We make products effortlessly transition from day to night.
                    From the board room to the fitness studio, and everywhere in between,
                    each 9owaa3 piece is thoughtfully created to be the perfect balance of form and function.  
                    </p>
                    <button className='button is-black' id='shop-now' onClick={()=> history.push('/product/1')}>
                    Adidas-Yeezy
                    </button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(MainSection);