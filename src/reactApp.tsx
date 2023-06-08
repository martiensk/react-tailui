import React from 'react';
import ReactDOM from 'react-dom/client';
import * as lib from '@/index';

/**
 * Simple set up to test components
 * @returns { JSX.Element } A react-tailui application
 */
const App = () => (
  <lib.RApp>
    <lib.RButton size="small" className='m-4' block>Button!</lib.RButton>
      Test2
  </lib.RApp>
);

let root = null;
// check if root already exists
if (root) 
  // if it does, call render on the existing root
  (root as ReactDOM.Root).render(<App />);
else 
  // if it doesn't, create the root and render the app
  root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode>
    <App />
  </React.StrictMode>);

