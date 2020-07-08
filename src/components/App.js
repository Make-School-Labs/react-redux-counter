import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import './App.css';
import reducers from '../reducers'

import { AddCounter, Total, CounterList } from './Counter'

const store = createStore(reducers)

class App extends Component {

  // const total = useSelector((state) => {
  //   return state.total
  // })

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
