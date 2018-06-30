// @flow
import * as R from "ramda"

export const Action = R.curry((type, payload)  => ({type, payload}))
export const PlainAction = (type: string) => () => ({type})


type AsyncActionTypeInterface = {
    started: string,
    finished: string,
}
export const AsyncActionType = (type: string): AsyncActionTypeInterface => ({
    started: `${type}_STARTED`,
    finished: `${type}_FINISHED`
})

export const AsyncAction = (asyncTypes: AsyncActionTypeInterface) => ({
    start: <T>(payload: T) =>  ({type: asyncTypes.started, payload}),
    finish: <T>(payload: T) => ({type: asyncTypes.finished, payload}),
})

export const SimpleAsyncAction = (asyncTypes: AsyncActionTypeInterface) => ({
    start: <T>(payload: T) =>  ({type: asyncTypes.started, payload}),
    finish: <T>(payload: T) => ({type: asyncTypes.finished, payload}),
})
