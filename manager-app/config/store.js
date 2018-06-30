import {createStore, combineReducers, applyMiddleware} from 'redux'

import {reducers} from "../redux"
import {composeWithDevTools} from 'remote-redux-devtools';
import { createEpicMiddleware } from 'redux-observable';
import {rootEpic} from "../redux/index"

const allReducers = {
    ...reducers,
}

const allMiddleware = [
    createEpicMiddleware(rootEpic)
]

export default store = createStore(
    combineReducers(allReducers),
    composeWithDevTools(
        applyMiddleware(...allMiddleware)
    )
)