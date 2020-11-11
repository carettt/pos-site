import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './Components';

const App = () => {
  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
          {/*TODO*/}
          <h1>This is pos.js</h1>
          <button className="installBtn">Install pos.js</button>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
