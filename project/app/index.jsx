'use strict';

require('./index.less');

import "jquery"
import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, hashHistory } from "react-router"

import Registration from "./registration/index.jsx"

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Registration} />
  </Router>
), document.getElementById("app-mount-point"));


