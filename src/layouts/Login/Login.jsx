import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import logRoutes from "routes/login";

class Login extends Component {

  render() {
    console.log("DASH ROUTES", this.props);
    return (
      <div className="wrapper">
          <Switch>
            {logRoutes.map((prop, key) => {
              if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key} />;
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
      </div>
    );
  }
}

export default Login;
