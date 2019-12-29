import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import { render } from "react-dom";
import MyForms from "./components/myform";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Shop from "./components/shop";
import ItemDetail from "./components/itemdetail";
import AppLayout from "./components/applayout";
import { ProtectedRoute } from "./components/protectedroute";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(x => x.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <Router>
        <Switch>
          <React.Fragment>
            <NavBar
              totalCounters={
                this.state.counters.filter(x => x.value > 0).length
              }
            />
            <main className="container">
              {/* <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          /> */}

              <Route path="/" exact component={Home} />
              <Route
                path="/counters"
                exact
                render={props => (
                  <Counters
                    {...props}
                    counters={this.state.counters}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDelete={this.handleDelete}
                  />
                )}
              />
              <ProtectedRoute path="/app" exact component={AppLayout} />
              <ProtectedRoute path="/shop" exact component={Shop} />
              <ProtectedRoute path="/shop/:id" component={ItemDetail} />
              <ProtectedRoute path="/myforms" component={MyForms} />
              <Route path="/login" component={Login} />
            </main>
          </React.Fragment>
        </Switch>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h1>Landing page</h1>
  </div>
);

export default App;
