import * as configActionsTypes from "./actionTypes"
import {Action, AsyncAction, PlainAction} from "../../libs/actions"
import {loadingConfigs} from "./actionTypes"
import {loadingConfigsFulfilled} from "./actionTypes"

export const changeConfigsSearchQuery = (newQuery) => ({type: configActionsTypes.listQueryChange, payload: newQuery})

export const changeActiveConfig = (activeConfig) => ({
    type: configActionsTypes.changedActiveConfig,
    payload: activeConfig
})
export const changeActiveConfigFinished = activeConfig => Action(configActionsTypes.changedActiveConfigFinished, activeConfig)
export const loadActiveConfig = AsyncAction(configActionsTypes.loadActiveConfig)

const saveConfigFactory = action => (name, config) => ({
    type: action,
    payload: {
        name,
        config
    }
})
export const saveConfig = saveConfigFactory(configActionsTypes.saveConfig)
export const saveConfigFinish = saveConfigFactory(configActionsTypes.saveConfigFulfilled)

export const deleteConfig = AsyncAction(configActionsTypes.deleteConfig)

export const editConfig = AsyncAction(configActionsTypes.editConfig)

export const loadConfigs = PlainAction(loadingConfigs)
export const loadConfigsFinish = payload => Action(loadingConfigsFulfilled, payload)



