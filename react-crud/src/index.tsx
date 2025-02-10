// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Home from "./component/Home";
// import './index.css';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <Home/>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./component/Home";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom'; // Import BrowserRouter

// Update the root element where you want to render your app
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* Wrap your component with BrowserRouter and set the basename */}
    <BrowserRouter basename="/CRUD-Application">
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
