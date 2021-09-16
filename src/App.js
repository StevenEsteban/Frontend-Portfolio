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
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Burger from './components/Navbar/Burger/Burger';
import Menu from './components/Navbar/Menu/Menu';
import React, { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);


  return (
   
     <Router>
       <Navbar/>
       <ThemeProvider theme={theme}>
      <>
        
        <div>
          <Menu  open={open} setOpen={setOpen} />
          <Burger  open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
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
