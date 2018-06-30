import Rx from "rxjs"
import * as R from "ramda"
import {PlainAction} from "./actions"

const makeTypes = baseType => ({
    start: `@INIT_${baseType}`,
    finish: `@INIT_${baseType}_FINISHED`
})

export const Initializer = (type, promiseFactory) => ((types => ({
    startAction: () => ({type: types.start}),
    finishType: types.finish,
    epic: action$ =>
        action$.ofType(types.start).take(1)
            .flatMap(() => Rx.Observable.fromPromise(promiseFactory()))
            .map(payload => ({type: types.finish, payload}))
}))(makeTypes(type)))

export const ActionInitializer = (startAction, finishType) => ({
    startAction: startAction,
    finishType,
    epic: action$ =>
        action$.skipWhile(R.always(true))
})

export const SimpleActionInitializer = (startActionType, finishType) => ActionInitializer(PlainAction(startActionType), finishType)
