import React, { Component } from 'react';
import './App.css';
import Counter from './Counter'
import { connect } from 'react-redux'


class CounterList extends Component {
  render() {
    const counters = this.props.counters.map((count, i) => {
      return <Counter key={i} index={i} />
    })

    console.log(counters)

    return (
      <div className="App">
        {counters}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    counters: state.counters
  }
}

export default connect(mapStateToProps)(CounterList);
