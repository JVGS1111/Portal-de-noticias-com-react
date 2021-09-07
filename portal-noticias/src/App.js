import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './paginas/Home';

function App() {
  return (
    <Router>
      <Header />
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

      </Switch>
    </Router>


  );
}

export default App;
