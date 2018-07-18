import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import './app.scss';

// Link is component that is basically an anchor tag under the hood
// Route allows us do to client side routing, e.g. if we travel to /dashboard, we 


export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <header>
              <h1>Budget Tracker</h1>
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
              </nav>
            </header>
            <Route 
              exact
              path="/dashboard"
              component={Dashboard}
            />
            <Route 
              exact
              path="/"
              component={() => <h1>I am your HOME page</h1>}
            />
          </div>
        </BrowserRouter>

      </div>
    );
  }
}
