import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Login from './pages/login'
import Cadastrar from './pages/cadastrar';
import Eventos from './pages/eventos';
import NaoEncontrada from './pages/naoencontrada';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const routing = (
  <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/cadastrar' component={Cadastrar} />
          <Route path='/eventos' component={Eventos} />
          <Route component={NaoEncontrada} />
        </Switch>
      </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

serviceWorker.unregister();