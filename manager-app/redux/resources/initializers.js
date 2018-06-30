import {ActionInitializer} from "../../libs/initializers"
import {loadResources, resourcesActionTypes} from "./actions"


const ResourcesInitializer = name => ActionInitializer(loadResources.start.bind(null, name), resourcesActionTypes.loadResources.finished)

export const createResourceInitializerFromModel = model => ResourcesInitializer(model.name)