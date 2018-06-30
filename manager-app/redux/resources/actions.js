import {Action, AsyncAction, AsyncActionType, PlainAction} from "../../libs/actions"

export const resourcesActionTypes = {
    addResource: AsyncActionType("ADD_RESOURCE"),
    editResource: AsyncActionType("EDIT_RESOURCE"),
    deleteResource: AsyncActionType("DELETE_RESOURCE"),
    loadResources: AsyncActionType("LOAD_RESOURCES"),
}

export const addResource = {
    start: (resourceName, data) => Action(resourcesActionTypes.addResource.started, {resourceName, data}),
    finish: (resourceName, data) => Action(resourcesActionTypes.addResource.finished, {resourceName, data}),
}
export const editResource = {
    start: (resourceName, id, data) => Action(resourcesActionTypes.editResource.started, {resourceName, id, data}),
    finish: (resourceName, id, data) => Action(resourcesActionTypes.editResource.finished, {resourceName, id, data}),
}
export const deleteResource = {
    start: (resourceName, id) => Action(resourcesActionTypes.deleteResource.started, {resourceName, id}),
    finish: (resourceName) => Action(resourcesActionTypes.deleteResource.finished, {resourceName}),
}
export const loadResources = {
    start: (resourceName) => Action(resourcesActionTypes.loadResources.started, {resourceName}),
    finish: (resourceName, data) => Action(resourcesActionTypes.loadResources.finished, {resourceName, data}),
}

export const createActionsForModel = ({name}) => ({
    add: {
        start: addResource.start.bind(undefined, name),
        finish: addResource.finish.bind(undefined, name),
    },
    edit: {
        start: editResource.start.bind(undefined, name),
        finish: editResource.finish.bind(undefined, name),
    },
    delete: {
        start: deleteResource.start.bind(undefined, name),
        finish: deleteResource.finish.bind(undefined, name),
    },
    load: {
        start: loadResources.start.bind(undefined, name),
        finish: loadResources.finish.bind(undefined, name),
    },
})