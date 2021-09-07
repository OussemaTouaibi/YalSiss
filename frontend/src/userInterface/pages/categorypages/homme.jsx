import React, { Fragment, useState, useEffect } from 'react'
import Pagination from 'react-js-pagination'
import Layout from '../../components/shared/layout'
import Product2 from '../../components/product/product2'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'

import { getAdminProducts } from '../../../actions/productActions'


import './homme.scss'
import NavH from '../../components/nav/NavH';



const Homme = () => {

   

    const dispatch = useDispatch();
    const alert    = useAlert();
    
   
    const { loading, products, error } = useSelector
    (state => state.products)

  

var listProducts = [];


    for  (var product of products){
      listProducts.push(product)
      
}

listProducts = listProducts.filter(product => product.category ===  "612fa1616f5fa653cc033abb" );
//console.log(product.subs)
//.filter



const [list, setList] = useState([]);


    useEffect(() => {

        setList(listProducts);


        if(error) {
    
          return  alert.error(error);
          
         }
    
        dispatch(getAdminProducts());
    
      }, [dispatch, alert, error])
    
       



//console.log(listProducts[0].subs);





console.log(listProducts);




const handleSelect = (sub) => {
    
    //console.log('parent'+ sub);
    setList(listProducts.filter(product => product.subs ===  sub ));
   // console.log(listProducts);
   console.log(list);

}




    return (
        <Layout>
            <NavH onSubSelect={handleSelect} />
           
           
    
   <div className="main_content">
        <h3>YalSiss</h3>
             {list   && list.map( product =>(
       <Product2 key = {product._id}  product = {product} />

 ))}

</div>



        </Layout>
    )
}


export default Homme