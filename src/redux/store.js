// importaciones de redux
import {createStore, combineReducers, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


// zona de importacion de ducks
import authReducer from './authDucks'

const rootReducer = combineReducers({
  // zona de agregacion de los ducks
  // authentication: authReducer
})

export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}