import R from "ramda"

export const createReducer = (defaultState, handlers) =>
    (state = defaultState, action) =>
        R.propOr(R.identity, action.type, handlers)(state, action)

export const conditionReducer =
    (condition, defaultState, handlers) =>
        (state = defaultState, action) => R.ifElse(
            condition,
            R.propOr(R.identity, action.type, handlers),
            R.always(state)
        )(state, action)