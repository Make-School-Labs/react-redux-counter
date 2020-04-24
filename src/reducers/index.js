import { combineReducers } from 'redux'
import counterreducer from './counterreducer'

export default combineReducers({
  counters: counterreducer
})

// state -> { count: [1,2,3] }
// obj -> { count: () => {} }

// function cr(obj) {
//   const state = {}
//   // init state loop over keys in obj
//   // 
// } 