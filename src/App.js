import {BrowserRouter, HashRouter, Route, Switch, Router} from 'react-router-dom'

import Home from './Pages/Home/Home';
import Header from './Pages/Components/Header/Header';
import Admin from './Pages/Admin/Admin';
import About from './Pages/About/About';
import Promo from './Pages/Promo/Promo';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';

function App() {

  


  return (
    <BrowserRouter>

      <div>
        <Header/>
      </div>
      
      <Switch>
        <Route path='/' exact component = {Home}  />
        <Route path='/aboutus' component = {About}  />
        <Route path='/promo' component = {Promo}  />
        <Route path='/gallery' component = {Gallery}  />
        <Route path='/contactus' component = {Contact}  />
        {/* <Route path='/admin_BCI'  component = {Admin}  /> */}
      </Switch>
        
    </BrowserRouter>
  );
}

export default App;
