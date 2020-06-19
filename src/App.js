import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Counter from './Components/Counter';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Switch> 
      <Route path='/counter' component={() => <Counter {...this.props} />} />
   </Switch>
        );
  }
}
