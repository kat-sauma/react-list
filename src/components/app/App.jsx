import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RMContainer from '../../containers/RMContainer';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component = {RMContainer} />
        {/* <Route path='/:id' component = {DetailContainer} /> */}

      </Switch>
    </Router>
  );
}
