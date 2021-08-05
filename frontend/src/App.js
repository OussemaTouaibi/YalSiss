import './App.scss';
import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';





import Homme from './userInterface/pages/homme';
import HomePage from './userInterface/pages/home-page';
import About from './userInterface/pages/aboutUs';
import NotFound from './userInterface/pages/notfound-page';
import Homepage2 from './userInterface/pages/home-page2';


// Cart Imports
import Cart from './userInterface/components/cart/cart'
import Shipping from './userInterface/components/cart/shipping';
import ConfirmOrder from './userInterface/components/cart/confirmOrder';
import OrderSuccess from './userInterface/components/cart/orderSuccess';

// Order Imports
import ListOrders from './userInterface/components/order/ListOrders';
import OrderDetails from './userInterface/components/order/OrderDetails';



// Auth or Users Imports
import LogIn from './userInterface/user/login/login';
import Signup from './userInterface/user/signup/signup';
import UpdatePassword from './userInterface/user/updatePassword/updatePassword'
import ForgotPassword from './userInterface/user/forgotPassword/forgotPassword'
import NewPassword from './userInterface/user/newPassword/newPassword'
import Profile from './userInterface/user/profile/profile';
import ProductDetails from './userInterface/components/product/productDetails'
import UpdateProfile from './userInterface/user/updateProfile/updateProfile'

// Admin Imports
import Dashboard from './adminInterface/component/dashboard/dashboard';
import ProductsList from './adminInterface/component/product/productList';

import ProtectedRoutes from './userInterface/route/protectedRoutes';
import { loadUser } from './actions/userActions'
import store from './store'








function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route  path="/product/:id" component={ProductDetails} />
        <Route  path='/Homme' component={Homme} />
        <Route  path='/password/forgot' component={ForgotPassword}  />
        <Route  path='/password/reset/:token' component={NewPassword} exact />

        
        
        <Route exact path='/cart' component={Cart} exact />
        <ProtectedRoutes exact path='/shipping' component={Shipping} />
        <ProtectedRoutes exact path='/order/confirm' component={ConfirmOrder} />
        <ProtectedRoutes exact path='/orders/me' component={ListOrders} />
        <ProtectedRoutes exact path='/order/:id' component={OrderDetails} />

        <ProtectedRoutes exact path='/success' component={OrderSuccess} />



        <ProtectedRoutes  path='/me' component={Profile} exact />
        <ProtectedRoutes  path='/me/update' component={UpdateProfile} exact />
        <ProtectedRoutes  path='/password/update' component={UpdatePassword} exact />

        
        <ProtectedRoutes  path='/dashboard' isAdmin={true} component={Dashboard} exact />
        <ProtectedRoutes  path='/admin/products' isAdmin={true} component={ProductsList} exact />




        <Route  path='/search/:keyword' component={Homepage2} />
        <Route  path='/Home2' component={Homepage2} />
        <Route  path='/login' component={LogIn} />
        <Route  path='/signup' component={Signup} />
        <Route  path='*' component={NotFound} />
      </Switch>
    </div>

  );
}

export default App;
