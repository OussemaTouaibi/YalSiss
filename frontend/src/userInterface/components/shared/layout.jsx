import React from 'react';


import Navbar from '../header1/navbar'
import Footer from '../footer/footer';
import Sidebar from '../sidebar/sidebar';


import './layout.scss'


const Layout=({ children }) => { 
    return (
    <>

    <Navbar />
    <Sidebar />
    
    <main>
        {
            children
        }
    </main>
    <Footer />
    </>
    );
}

export default Layout;