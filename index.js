import React from 'react';
import ReactDOM from 'react-dom';
import Base from './src/baseContainer';
import { Router, Route, Link } from 'react-router';

const routeApp = (
    <Router>
        <Route path="/pages" component={Base}/>
     </Router>
 );

ReactDOM.render(
  <Base/>,
  document.getElementById('root')
);
