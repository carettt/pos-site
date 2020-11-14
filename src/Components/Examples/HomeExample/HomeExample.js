import React from 'react';
import Sketch from 'react-p5';
import '../../../App.css';
import { theme } from '../../../theme';

export const HomeExample = () => {
  let x = 25;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(theme.primaryLight);
    p5.stroke(theme.primaryLight);
    p5.fill(theme.primaryDark);
    p5.circle(x, 50, 25);
    x += 1;
  };

  return (
    <div className="HomeExample">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};
