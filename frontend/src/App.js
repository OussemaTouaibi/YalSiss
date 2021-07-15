import './App.scss';
import { Switch, Route } from 'react-router-dom';
 import HomePage from './userInterface/pages/home-page';
import NotFound from './userInterface/pages/notfound-page';
import Shop from './userInterface/pages/shop';
import LogIn from './userInterface/login/login';
import Signup from './userInterface/signup/signup';
import Homepage2 from './userInterface/pages/home-page2';
import Homme from './userInterface/pages/homme';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/Homme' component={Homme} />
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
