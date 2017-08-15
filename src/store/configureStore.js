import { createStore } from 'redux'
import rootReducer from '../reducer'

function configureStore(initialState) {
  const store = createStore(rootReducer, initialState)
  if(process.env.NODE_ENV === 'development') {
    window.store = store
  }
  return store
}

export default configureStore