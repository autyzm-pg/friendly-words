// @flow
import FieldSimpleView from "./text/TextInput"
import * as R from "ramda"
import React from "react"

export type BaseFieldType = {
    name: string,
    component: any,
    verbose: string,
    props: any,

    getDefaultValue(): any,
    renderField(getValueForName: (string) => any, onChange: ([string | number]) => () => void): React.Element<*>
}

export function _renderField(getValueForName, onChange, config, path) {
    const Component = this.component

    return <Component value={getValueForName(this.name)} key={this.name} onChange={onChange([this.name])}
                      verbose={this.verbose} {...this.props} {...this.dynamicMapper(config, path)} config={config}
                      path={path}/>
}

export const _renderFieldWithComponentName = componentName => function (getValueForName, onChange, config, path) {
    const newContext = {...this, component: this[componentName]}
    return _renderField.call(newContext, getValueForName, onChange, config, path)
}

export const _renderFieldWithComponent = Component => function (getValueForName, onChange, config, path) {
    const newContext = {...this, component: Component}
    return _renderField.call(newContext, getValueForName, onChange, config, path)
}

type FieldConstructor = (component: ?any, defaultSettings: ?any) => (string, any) => (string) => BaseFieldType;
export const Field: FieldConstructor =
    (component = FieldSimpleView, defaultSettings = {}) =>
        (verbose, settings={}, dynamicSettingsMapper = () => ({})) =>
            name => ({
                name,
                component: settings.component || component,
                verbose,
                dynamicMapper: dynamicSettingsMapper,
                props: {
                    ...defaultSettings,
                    ...settings
                },
                getDefaultValue() {
                    return this.props.def
                },

                renderField: _renderField
            })

export type FieldProps<T> = {
    value: T,
    onChange: (T) => void,
    verbose: string
}

// export const renderField = (config: *, onChange: (string) => () => void) => (Field: BaseFieldType) => (
//     <Field.component value={config[Field.name]} key={Field.name} onChange={onChange([Field.name])}
//                      verbose={Field.verbose} {...Field.props}/>
// )

export const renderField = (getValueForName: (string) => *, onChange: (string) => () => void, context: any, getPath: string => [string | number]) => (field: BaseFieldType) =>
    field.renderField(getValueForName, onChange, context, getPath(field.name))


// export const BoolField = Field(TextInput, {def: false})
// export const ModelListField = Field(TextInput, {def: [], model: undefined})
// export const ChecklistField = Field(TextInput, {def: [], options: []})
// export const ImageChecklistField = Field(TextInput, {def: [], options: []})
// export const ArrayField = Field(TextInput, {def: []})
// export const ObjectField = Field(TextInput, {def: {}})
// export const ForeignField = Field()
// export const MultiOptionField = Field(TextInput, {options: []})
// export const UriField = Field(TextInput, {def: ""})
// export const IntegerField = Field(TextInput, {def: 0})
// export const MultiImageOptionField = Field(TextInput, {options: []})
// export const MultiColorField = Field(TextInput, {options: []})
// export const MultiSizeField = Field(TextInput, {options: []})

export const getDefaultModel = R.map(field => field.def)