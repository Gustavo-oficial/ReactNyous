import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Login from './pages/login'
import Cadastrar from './pages/cadastrar';
import Eventos from './pages/eventos';
import NaoEncontrada from './pages/naoencontrada';
import Dashboard from './pages/admin/dashboard';
import CrudCategorias from './pages/admin/crudcategorias';
import CrudEventos from './pages/admin/crudeventos';
import jwt_decode from 'jwt-decode';
import SemPermissao from './pages/sempermissao';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";


const RotaPrivada = ({component : Component, ...rest}) => (
  <Route 
    {...rest}
    render = { props => 
        localStorage.getItem('token-nyous') !== null ? 
          (<Component {...props} />) : 
          (<Redirect to={{ pathname :'/login', state :{from : props.location}}} />)
    }
  />
);

const RotaPrivadaAdministrador = ({component : Component, ...rest}) => (
  <Route 
    {...rest}
    render = { props => 
        localStorage.getItem('token-nyous') !== null && jwt_decode(localStorage.getItem('token-nyous')).role === 'Admin' ? 
          (<Component {...props} />) : 
          (<Redirect to={{ pathname :'/login', state :{from : props.location}}} />)
    }
  />
);

const routing = (
  <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home}  />
          <Route path='/login' component={Login} />
          <Route path='/cadastrar' component={Cadastrar} />
          <RotaPrivada path='/eventos' component={Eventos} />
          <RotaPrivadaAdministrador path='/administrador/dashboard' component={Dashboard} />
          <RotaPrivadaAdministrador path='/administrador/categorias' component={CrudCategorias} />
          <RotaPrivadaAdministrador path='/administrador/eventos' component={CrudEventos} />
          <Route path='/sempermissao' component={SemPermissao} />
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