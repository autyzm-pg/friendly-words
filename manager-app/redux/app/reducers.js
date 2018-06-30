import {finishedStartingApp} from "./actionTypes"
import {createReducer} from "../../libs/reducers"

const defaultState = {
    ready: false
}

const handlers = {
    [finishedStartingApp]: state => ({...state, ready: true})
}

export default createReducer(defaultState, handlers)