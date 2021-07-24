import './App.scss';
import { Switch, Route } from 'react-router-dom';
 import HomePage from './userInterface/pages/home-page';
import NotFound from './userInterface/pages/notfound-page';
import Shop from './userInterface/pages/shop';
import LogIn from './userInterface/user/login/login';
import Signup from './userInterface/user/signup/signup';
import Homepage2 from './userInterface/pages/home-page2';
import Homme from './userInterface/pages/homme';
import ProductDetails from './userInterface/components/product/productDetails'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path="/product/:id" component={ProductDetails} />
        <Route  path='/Homme' component={Homme} />
        <Route  path='/search/:keyword' component={Homepage2} />
        <Route  path='/Home2' component={Homepage2} />
        <Route  path='/Shop' component={Shop} />
        <Route  path='/login' component={LogIn} />
        <Route  path='/signup' component={Signup} />
        <Route  path='*' component={NotFound} />
      </Switch>
    </div>

  );
}

export default App;
