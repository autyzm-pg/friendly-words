// @flow
import {AsyncActionType} from "../../libs/actions"

export const saveConfig = "SAVE_CONFIG"
export const saveConfigFulfilled = "SAVE_CONFIG_FULFILLED"
export const loadingConfigs = "LOAD_CONFIGS"
export const loadingConfigsFulfilled = "LOAD_CONFIGS_FULFILLED"
export const deleteConfig = AsyncActionType("DELETE_CONFIG")
export const editConfig = AsyncActionType("EDIT_CONFIG")

export const loadActiveConfig = AsyncActionType("LOAD_ACTIVE_CONFIG")
export const changedActiveConfig = "CHANGE_ACTIVE_CONFIG"
export const changedActiveConfigFinished = "CHANGE_ACTIVE_CONFIG_FINISHED"

export const listQueryChange = "CHANGE_QUERY"