import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Counter from './Components/Counter';

export default class App extends Component {
  static displayName = App.name;

  render() {
    console.log(this.props)
    return (
      <Switch> 
      <Route path='/counter' component={() => <Counter {...this.props} />} />
   </Switch>
        );
  }
}
