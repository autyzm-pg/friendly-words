// @flow
import * as R from "ramda"
import {createTableForModel} from "../../db/db"
import {createResourcesReducerFromModels} from "../../redux/resources/reducers"
import {createActionsForModel} from "../../redux/resources/actions"

type ExtractTypeFunc = <V>((string) => V) => V
export type ModelType<M> = {
    name: string,
    fields: $ObjMap<M, ExtractTypeFunc>,
    getDefaultConfig: () => any
}

export const Model = <M>(name: string, configDefinition: M): ModelType<M> => ({
    name,
    fields: R.compose(
        R.fromPairs,
        R.map(([fieldName, fieldFunc]) => [fieldName, fieldFunc(fieldName)]),
        R.toPairs
    )(configDefinition),
    getDefaultConfig: function () {
        return R.compose(
            R.fromPairs,
            R.map(([fieldName, field]) => [fieldName, field.getDefaultValue()]),
            R.toPairs
        )(this.fields)
    },
    reducers: createResourcesReducerFromModels([{name}]),
    actions: createActionsForModel({name}),
    mapStateToList: (state) => state.resources[name].all
})

export const DBModel = <M>(name: string, configDefinition: M): ModelType<M> => {
    const model = Model(name, configDefinition)

    createTableForModel(model)

    return model
}

export const MainModel = configDefinition => DBModel("configs", configDefinition)