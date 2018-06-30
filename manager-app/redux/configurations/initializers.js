import {loadActiveConfig, loadingConfigs, loadingConfigsFulfilled} from "./actionTypes"
import {SimpleActionInitializer} from "../../libs/initializers"


export const ConfigsInitializer = SimpleActionInitializer(loadingConfigs, loadingConfigsFulfilled)
export const ActiveConfigInitializer = SimpleActionInitializer(loadActiveConfig.started, loadActiveConfig.finished)