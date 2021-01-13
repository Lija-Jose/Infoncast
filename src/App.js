import './App.css';
import Aux from './hoc/Auxiliary';
import Auth from './Containers/Auth/Auth';
import Register from './Containers/Register/Register';
import {Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
    <Aux >       
    <Switch>
    <Route path="/SignIn" component={Auth}/>
    <Route path="/Register" component={Register}/>
    <Route path="/ForgotPassword" component={Auth}/>
    </Switch>
    </Aux>
 );
}
}

export default App;
