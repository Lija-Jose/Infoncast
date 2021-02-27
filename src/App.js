import "./App.css";
import Aux from "./hoc/Auxiliary";
import Auth from "./Containers/Auth/Auth";
import Register from "./Containers/Register/Register";
import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Toolbar from "./Components/Navigation/Toolbar/Toolbar";
import SideDrawer from "./Components/Navigation/SideDrawer/SideDrawer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      login: false,
      showSideDrawer: false,
    };
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        {!this.state.login ? (
          <Switch>
            <Route path="/SignIn" component={Auth} />
            <Route path="/Register" component={Register} />
            <Route path="/ForgotPassword" component={Auth} />
          </Switch>
        ) : (
          <div>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
            <SideDrawer open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
            <main className={"Content"}>{this.props.children}</main>
          </div>
        )}
      </Aux>
    );
  }
}

export default App;
