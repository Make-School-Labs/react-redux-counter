import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './App.css';
import reducers from '../reducers'
import Total from './Total'
import AddCounter from './AddCounter'

import CounterList from './CounterList'

const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AddCounter />
          <CounterList />
          <Total />
        </div>
      </Provider>
    );
  }
}

export default App

// Add Remove Counter Button
// Average component 
// Reset all counters
