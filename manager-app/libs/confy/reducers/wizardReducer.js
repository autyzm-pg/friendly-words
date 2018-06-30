import {getDefaultModel} from "../fields/fields"

export const wizardReducer = model => {
    const defaultState = {
        model: model,
        activeConfig: {}
    }

    return (state = defaultState, action) => {
        return state
    }
}