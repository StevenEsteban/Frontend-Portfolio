// import logo from './logo.svg';

import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Pages/Home';
import PreviousWork from './components/Pages/PreviousWork';
import FAQ from './components/Pages/FAQ';
import Contact from './components/Pages/Contact';

function App() {
  return (
   
     <Router>
       <Navbar/>
       <Switch>
         <Route path ="/" exact component={Home} />
         <Route path ="/PreviousWork" exact component={PreviousWork} />
         <Route path ="/FAQ" exact component={FAQ} />
         <Route path ="/Contact" exact component={Contact} />
       </Switch>
     </Router>


  );
}

export default App;
