import logo from './Logo/Logo.png';
import './App.css';
import Aux from './hoc/Auxiliary';
import Auth from './Containers/Auth/Auth';
import Register from './Containers/Register/Register';
import {Route, Switch} from 'react-router-dom';
function App() {
  
  
  return (
    <Aux className={"Centralize"}> 
    <img src={logo} className="App-logo" alt="Logo"/>   
    <Switch>
    <Route path="/SignIn" component={Auth}/>
    <Route path="/Register" component={Register}/>
    <Route path="/ForgotPassword" component={Auth}/>
    </Switch>
    </Aux>
  );
}

export default App;
