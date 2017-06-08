import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App';
import LashDetail from './LashDetail';

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>

      <hr/>
        <Route exact path="/" component={App}/>
        <Route path="/listings/:id" component={LashDetail}/>
    </div>
  </Router>
)

export default Routes;
