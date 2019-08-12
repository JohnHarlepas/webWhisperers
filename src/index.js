import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import ReactGA from 'react-ga'

import "./index.css";
import App from "./App";


ReactGA.initialize('UA-145077240-1');
ReactGA.pageview(window.location.pathname + window.location.search);


ReactDOM.render(
    <BrowserRouter basename={"/"}>
        <Route path="/" component={App} />
    </BrowserRouter>,
    document.getElementById("root")
);