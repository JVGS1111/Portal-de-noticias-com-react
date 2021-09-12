import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './paginas/Home';
import Pagina404 from './paginas/404';
import Sobre from './paginas/Sobre';
import ListaDeCategorias from './components/ListaDeCategorias';
import Post from './paginas/Post';
import Categorias from './paginas/Categorias';

function App() {
  return (
    <Router>
      <Header />
      <Switch>

        <Route exact path='/'>
          <ListaDeCategorias />
          <Home />
        </Route>

        <Route exact path='/sobre'>
          <Sobre />
        </Route>

        <Route path='/posts/:id'>
          <Post />
        </Route>

        <Route path='/categorias/:id'>
          <Categorias />
        </Route>

        <Route>
          <Pagina404 />
        </Route>

      </Switch>
    </Router>


  );
}

export default App;
