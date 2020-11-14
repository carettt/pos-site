import React from 'react';
import '../../App.css';
import { HomeExample } from '../';

export const Home = () => {
  return (
    <div className="App">
      {/*TODO*/}
      <HomeExample />
      <div className="absolute-container">
        <div className="relative-container">
          <h1>this is pos.js</h1>
          <button className="installBtn">Install pos.js</button>
        </div>
      </div>
    </div>
  );
};
