import './App.scss';
import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

 import HomePage from './userInterface/pages/home-page';
import NotFound from './userInterface/pages/notfound-page';
import LogIn from './userInterface/user/login/login';
import Signup from './userInterface/user/signup/signup';
import Cart from './userInterface/components/cart/cart'
import Homepage2 from './userInterface/pages/home-page2';
import Homme from './userInterface/pages/homme';
import Profile from './userInterface/user/profile/profile';
import ProductDetails from './userInterface/components/product/productDetails'
import UpdateProfile from './userInterface/user/updateProfile/updateProfile'
import UpdatePassword from './userInterface/user/updatePassword/updatePassword'
import ForgotPassword from './userInterface/user/forgotPassword/forgotPassword'
import NewPassword from './userInterface/user/newPassword/newPassword'

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
        <Route  path="/product/:id" component={ProductDetails} />
        <Route  path='/Homme' component={Homme} />
        <Route  path='/password/forgot' component={ForgotPassword}  />
        <Route  path='/password/reset/:token' component={NewPassword} exact />

        <Route exact path='/cart' component={Cart} exact />


        <ProtectedRoutes  path='/me' component={Profile} exact />
        <ProtectedRoutes  path='/me/update' component={UpdateProfile} exact />
        <ProtectedRoutes  path='/password/update' component={UpdatePassword} exact />

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
