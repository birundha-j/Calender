import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Password from './atm/password'
import Tickets from './Tickets/tickets'
import Newdesign from './project/project';
import DesignLearn from './DesignLearn/DesignLearn.js';
import SecondPage from './SecondPage/SecondPage.js';
import NewCalender from './Owncalender/owncalender.js'
import components from './DesignLearn/DesignLearn'



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// import React from 'react';

// import ReactDOM from 'react-dom';
// import App from './app.js';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Routes } from './routes'; // where we are going to specify our routes
// import Password from './atm/password'


// ReactDOM.render(
//   <Router>
//     <Routes />
//     <Password/>
//   </Router>,
//   document.getElementById('root')
// );

