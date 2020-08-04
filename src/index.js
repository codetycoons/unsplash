import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Header } from "./Header";
import Homepage from "./Homepage";
import { ContactUs } from "./ContactUs";
import Cart from "./Cart";
import { AboutUs } from "./AboutUs";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Reducer } from "./Reducer";

const store = createStore(Reducer);

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/Cart" component={Cart} />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
