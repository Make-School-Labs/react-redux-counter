import React from 'react'
import { connect } from 'react-redux'
import { addCounter } from '../actions'

function AddCounter(props) {
  return (
    <button onClick={() => props.addCounter()}>Add Counter</button>
  )
}

export default connect(null, { addCounter })(AddCounter)
