import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './ts/pages/App';

document.body.style.margin = '0px';
document.body.style.scrollBehavior = 'smooth';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);