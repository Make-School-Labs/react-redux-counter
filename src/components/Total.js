import React from 'react'
import { connect } from 'react-redux'

function Total(props) {
  return (
  <h1>{props.total}</h1>
  )
}

const mapStateToProps = (state) => {
  return {
    total: state.counters.reduce((acc, n) => acc + n)
  }
}

export default connect(mapStateToProps)(Total)