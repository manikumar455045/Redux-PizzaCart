import React from 'react';
import "./App.css";
import PizzaHut from "./Components/PizzaHut";






let App  = () => {
  return (
    <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-md">
            <div className="container">
                <a href="/" className="navbar-brand font-weight-bold">React Redux</a>
            </div>
        </nav>
        <PizzaHut/>
        </React.Fragment>
  );
}

export default App;
