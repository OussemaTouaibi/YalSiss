import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../sidebar/sidebarData';
import SubMenu from '../sidebar/subMenu';
import { IconContext } from 'react-icons/lib';
import './navbar.scss'
import Search from '../shared/search'


const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width : 960px) {}
`;

const NavIcon = styled(Link)`
  margin-right: 25rem;
  font-size: 1.7rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width : 960px) {
 display: block;

  }
`;

const SidebarNav = styled.nav`
 
  overflow-y: scroll;
  pointer : cursor;
  background: #15171c;
  width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 20;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  
  @media (max-width : 960px) {}
  
`;

const SidebarWrap = styled.div`
  width: 100%;
  
  @media (max-width : 960px) {}
`;


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          
       
          <div className="col-12 col-md-6 mt-2 mt-md-0">

        <Route render={({ history }) => <Search history={history} /> } />


          </div>

      
          <div>
            <ul className="navbarr__links">
              
                <li>
                    <Link to="/" className="cart__link">
                        <i className="fas fa-shopping-cart" ></i>
                    Cart
                    <span className="cartlogo__badge">0</span>
                    </Link>
                </li>
                
            </ul>
     
            </div>
            
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}


            
       
          </SidebarWrap>
          
        </SidebarNav>
        
      </IconContext.Provider>
    
    </>
  );
};

export default Sidebar;