import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import indexRoutes from "routes/index";
import { Provider } from "react-redux";
import Store from "./store";
import throttle from 'lodash/throttle';

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

import { saveState } from './localStorage';

import "./assets/css/index.css";

const hist = createBrowserHistory();

Store.subscribe(throttle(() => {
    saveState(Store.getState())
}, 1000))

ReactDOM.render(
    <Provider store={Store}>
        <Router history={hist}>
          <Switch>
            {indexRoutes.map((prop, key) => {
              return <Route path={prop.path} component={prop.component} key={key} />;
            })}
          </Switch>
      </Router>
    </Provider>,
  document.getElementById("root")
);
