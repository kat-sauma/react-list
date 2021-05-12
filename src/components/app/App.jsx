import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component = {RMContainer} />
        {/* <Route exact path='/:id' component = {Container} />
        <Route exact path='/' component = {CharacterList} />
        <Route exact path='/:id' component = {Character} />
        <Route exact path='/:id' component = {Details} /> */}

      </Switch>
    </Router>
  );
}
