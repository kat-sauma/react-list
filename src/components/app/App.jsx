import React from 'react';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component = {Container} />
        <Route exact path='/:id' component = {Container} />
        <Route exact path='/' component = {CharacterList} />
        <Route exact path='/:id' component = {Character} />
        <Route exact path='/:id' component = {Details} />

      </Switch>
    </Router>
  );
}
