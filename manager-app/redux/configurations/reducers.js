import {createReducer} from "../../libs/reducers"
import R from "ramda"
import * as configActionsTypes from "./actionTypes"
import {ConfigsInitializer} from "./initializers"

const defaultState = {
    all: [],
    searchQuery: "",
    active: {
        id: undefined,
        mode: undefined
    }
}

const handlers = {
    [configActionsTypes.listQueryChange]: (state, action) => R.assoc('searchQuery', action.payload.toLowerCase(), state),
    [configActionsTypes.loadActiveConfig.finished]: (state, action) => R.assoc('active', action.payload, state),
    [ConfigsInitializer.finishType]: (state, action) => ({
        ...state,
        all: action.payload
    })
}

export const _handlers = handlers
export default createReducer(defaultState, handlers)