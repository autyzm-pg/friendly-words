import Rx from "rxjs/Rx"
import "rxjs"
import {startedApp} from "./actionTypes"
import {finishStartingApp} from "./actions"
import * as R from "ramda"
import initializers from "../initializersRegister"

export const initialEpic = action$ =>
    action$.ofType(startedApp).take(1)
        .do(() => console.log("Loading app..."))
        .flatMap(() => Rx.Observable.from(
            initializers.map(R.prop("startAction")).filter(R.identity).map(R.call)
        ))

export const finishInitEpic = action$ =>
    Rx.Observable.forkJoin(
        Rx.Observable.of(true),
        ...initializers.map(R.prop('finishType')).filter(R.identity).map(actionType => action$.ofType(actionType).take(1))
    ).map(finishStartingApp).do(() => console.log("Finished loading app"))

export default [initialEpic, finishInitEpic]