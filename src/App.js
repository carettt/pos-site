import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useOnClickOutside } from './hooks';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './Components/';
import { Home, Install, Documentation, Contribute } from './Components/';

const App = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <div ref={node}>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/install" exact component={Install} />
                <Route path="/documentation" exact component={Documentation} />
                <Route path="/contribute" exact component={Contribute} />
              </Switch>
            </div>
          </>
        </ThemeProvider>
      </div>
    </Router>
  );
};

export default App;
