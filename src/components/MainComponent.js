import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes'; // .. b/c you go up one folder
import {Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

  constructor(props) {
      super(props);

      this.state = {
          dishes: DISHES,
      };
  }

  render() {
    const HomePage = () => {
      return (
        <Home />
      );
    }

    return (
    <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> } />
          <Redirect to="/home" />
        </Switch>
        <Footer />
    </div>
    );
  }
}

/*
style={{border: '1px solid red'}} 
*/

/*

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default Main;
