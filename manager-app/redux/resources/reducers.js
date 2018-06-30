import {conditionReducer, createReducer} from "../../libs/reducers"
import R from "ramda"
import {resourcesActionTypes} from "./actions"
import {combineReducers} from "redux"

const defaultState = {
    all: []
}

const handlers = {
    [resourcesActionTypes.loadResources.finished]: (state, {payload}) => R.assoc('all', payload.data, state),
}

const isActionForResourceName = name => (state, action) => action.payload && name === action.payload.resourceName
const reducerForResourceName = name => conditionReducer(isActionForResourceName(name), defaultState, handlers)

export const _handlers = handlers

export const createResourcesReducerFromModels = R.pipe(
    R.map(R.prop('name')),
    R.map(resourceName => [resourceName, reducerForResourceName(resourceName)]),
    R.fromPairs,
    combineReducers
)