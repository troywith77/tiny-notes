import { combineReducers } from 'redux'
import ui from './ui'
import layout from './layout'

const rootReducer = combineReducers({
  ui,
  layout
})

export default rootReducer