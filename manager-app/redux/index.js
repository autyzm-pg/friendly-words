import configurationsReducer from "./configurations/reducers"
import {combineEpics} from 'redux-observable'
import configEpics from "./configurations/epics"
import appEpics from "./app/epics"
import appReducer from "./app/reducers"
import initializers from "./initializersRegister"
import * as R from "ramda"
import {createResourcesReducerFromModels} from "./resources/reducers"
import {WordModel} from "../config/model"
import {ResourcesEpic, ResourcesReducer} from "./resources"

console.disableYellowBox = true;

export const reducers = {
    configurations: configurationsReducer,
    app: appReducer,
    resources: ResourcesReducer
}

const initializersEpic = combineEpics(
    ...initializers.map(R.prop('epic'))
)

export const rootEpic = combineEpics(
    ...appEpics,
    ...configEpics,
    ResourcesEpic,
    initializersEpic,
)
