
import {createResourcesReducerFromModels} from "./reducers"
import {WordModel} from "../../config/model"
import {createResourceInitializerFromModel} from "./initializers"

import CombinedResourcesEpic from "./epics"

export const ResourcesReducer = createResourcesReducerFromModels([WordModel])
export const ResourcesInitializers = [
    createResourceInitializerFromModel(WordModel)
]
export const ResourcesEpic = CombinedResourcesEpic