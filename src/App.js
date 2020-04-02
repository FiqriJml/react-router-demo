import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import { Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
    <div className="App">
      <nav style={ linkStyle }>
        <ul>
          <li><Link style={ linkStyle } to="/">Home</Link></li>  
          <li><Link style={ linkStyle } to="/about">About</Link></li>  
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
    </Router>
  );
}
const linkStyle = {
  color: 'black',
  textDecoration: 'none',
}
export default App;
