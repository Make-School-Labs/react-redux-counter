import React from 'react'
import { connect } from 'react-redux'

function Total(props) {
  return (
  <h1>{props.total} {props.otherTotal}</h1>
  )
}

const mapStateToProps = (state) => {
  return {
    total: state.counters.reduce((acc, n) => acc + n),
    otherTotal: state.total
  }
}

export default connect(mapStateToProps)(Total)