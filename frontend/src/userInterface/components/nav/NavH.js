import React, {Fragment} from 'react'

import './Nav.scss'

const  NavH = (props) => {



  var sub = "" ;

const handleSelect = (e) => {
sub = e.target.title;
console.log(sub);
props.onSubSelect(sub)
}


    return (
        <Fragment>

<div className="headerz" data-sticky="true">
      <div className="headerz__top">
        <div className="ps-container">

                      <nav className="navigation">
              <ul className="main-menuz menuz">
               

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children"  onClick={handleSelect}><a href="#"  title={'Jean'} >Jeans</a>
                </li>

                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children"  onClick={handleSelect}><a href="#"  title={'Shoes'} >Shoes</a>
      
                </li>
             
                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect} ><a href="#"  title={'Hoodies'} >Hoodies</a>
  
                </li>
                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children"  onClick={handleSelect}  ><a href="#" title={'Shirts'} >Shirts</a>
                </li>
             
                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect} ><a href="#" title={'T-shirt'} >T-shirt</a>
                </li>
               
                <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect} ><a href=""  title={'Shorts'} >Shorts</a>
                </li>
               </ul>
               <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect} ><a href="#" title={'caps'} >Caps</a>
                </li>
               </ul>
               <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect} ><a href="#" title={'Sport Clothes'}>Sport Clothes</a>
                </li>
               </ul>
               <ul className="main-menuz menuz">
                <li className="current-menuz-item menuz-item-has-children" onClick={handleSelect} ><a href="#" title={'Jackets'}>Jackets</a>
                </li>
               </ul>         
              </ul>
              </ul>

              </ul>
              </ul>
              </ul>
              </ul>
                  </nav>
                  </div>
                  </div>
                  </div>
             
  
              </Fragment>
    )
}

export default NavH
