import {addRecord, deleteRecord, modifyDb, readDbSafe, readTable, updateRecord} from "./db"
import * as R from "ramda"

const removeConfigFromList = name => R.filter(config => config.name !== name)
const addConfigToList = (name, config) => R.append({
    name,
    config
})


export const readConfigs = () => readTable("configs")
export const addConfig = (newConfig) => addRecord('configs', newConfig)
export const deleteConfig = configId => deleteRecord('configs', configId)
export const updateConfig = (id, newConfig) => updateRecord('configs', id, newConfig)

export const changeActiveConfig = (newActiveConfigId, mode) => modifyDb(
    ['activeConfig'],
    R.always({id: newActiveConfigId, mode})
)
export const readActiveConfig = () => readDbSafe().then(R.prop('activeConfig'))