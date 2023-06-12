import React from 'react';
import ReactDOM from 'react-dom/client';
import * as lib from '@/index';

/**
 * Simple set up to test components. Use this to test a component using vite's run dev mode.
 * @returns { JSX.Element } A react-tailui application
 */
const App = () => (
  <lib.RApp>
    <lib.RButton size="small" className='m-4'>Button!</lib.RButton>
    <lib.RButton size="small" className='m-4' variant='plain'>Button!</lib.RButton><br />
    <lib.RButton size="small" className='m-4' color="secondary">Button!</lib.RButton>
    <lib.RButton size="small" className='m-4' variant='plain' color="secondary">Button!</lib.RButton><br />
    <lib.RButton size="small" className='m-4' color="tertiary">Button!</lib.RButton>
    <lib.RButton size="small" className='m-4' variant='plain' color="tertiary">Button!</lib.RButton><br />
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

