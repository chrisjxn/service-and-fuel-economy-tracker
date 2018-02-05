import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import AddRefuel from './components/addRefuel/AddRefuel';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/add-refuel' component={AddRefuel} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
