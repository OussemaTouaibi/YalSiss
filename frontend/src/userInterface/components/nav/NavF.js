import React, {Fragment} from 'react'

import './Nav.scss'

const  NavF = (props) => {

  var sub = "" ;

  const handleSelect = (e) => {
  sub = e.target.title;
  console.log(sub);
  props.onSubSelect(sub);
  
  }

    return (
        <Fragment>

<div className="headerz" data-sticky="true">
      <div className="headerz__top">
        <div className="ps-container">

                      <nav className="navigation">
   
              <ul className="main-menuz menuz">
               

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children"  onClick={handleSelect}><a href="#" title={'dress'} >Dress</a>
                </li>
                </ul>

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children"  onClick={handleSelect}><a href="#" title={'Sweater'}>Sweater</a>
                </li>
                </ul>
             
                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children"  onClick={handleSelect}><a href="#" title={'T-shirts'}>T-shirt</a>
                </li>
                </ul>

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children"  onClick={handleSelect}><a href="#" title={'GYM Clothes'}>GYM Clothes</a>
                </li>
                </ul>

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children"  onClick={handleSelect} ><a href="#" title={'Short'}>Shorts</a>
                </li>
                </ul>

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect} ><a href="#" title={'Hoodie'}>Hoodies</a>
                </li>
                </ul>

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect}><a href="#" title={'Coat'}>Coat</a>
                </li>
                </ul>

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children"  onClick={handleSelect}><a href="#" title={'Jacket'}>Jackets</a>
                </li>
                </ul>

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect} ><a href="#" title={'Shoe'}>Shoes</a>
                </li>
                </ul>

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children"><a href="#" title={'Skirt'}>Skirt</a>
                </li>
                </ul>
                </ul>
                
                    </nav>
                    </div>
                    </div>
                    </div>
             
  
              </Fragment>
    )
}

export default NavF
