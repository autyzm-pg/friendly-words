import * as appActionTypes from "./actionTypes"
import {PlainAction} from "../../libs/actions"

export const startApp = PlainAction(appActionTypes.startedApp)
export const finishStartingApp = PlainAction(appActionTypes.finishedStartingApp)

