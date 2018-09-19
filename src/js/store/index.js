import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

// const store = createStore(rootReducer)
//
// export default store

export default function store () {
    return createStore(rootReducer, applyMiddleware(thunk))
}