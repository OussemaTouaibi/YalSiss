import React from 'react';
import './hero.styles.scss';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
      <div>
<section class="hero is-large is-info hero-image">
  <div class="hero-body">
      <div className='container'>
    <h1 className='hero-title'>
    High quality & Low price.
    </h1>
    <div className='try-now-btn'>
    <Link to="/Prototypes">
    <button className='button is-black' id='try-now'>
      SHOP NOW
    </button>
    </Link>
  </div>
  <h1 className='hero-title'>
  Bestsellers
    </h1>
  <div className='try-now-btn'>
  <button className='button is-black' id='try-now'>
      Create Your Account
    </button>
    </div>
  </div>
  </div>
  </section>
</div>
    );
}

export default Hero;