import React from "react";
import "./styles.css";
import Product from "./Product";
import { Route, Switch } from "react-router-dom";

function Home() {
  return <h1>Home</h1>;
}
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/product" component={Product}></Route>
      </Switch>
    </div>
  );
}
