import * as R from "ramda"
import React from "react"
import {ObjectListInput} from "./ObjectInput"
import {Model} from "../../models"

const renderChildField = (config, path, currentValue, onChange) => (field) =>
    field.renderField(
        R.always(currentValue[field.name]),
        R.always(onChange(field.name)),
        config,
        [...path, field.name]
    )

export const ObjectField = (verbose, fields, settings = {}, component = ObjectListInput) => name => ({
    name,
    verbose,
    component,
    dynamicMapper: () => ({}),
    props: {
        model: Model(`name-model`, fields),
        hiddenFields: settings.hidden || []
    },

    getDefaultValue() {
        return this.props.model.getDefaultConfig()
    },

    renderField: function(getValueForName, onChange, config, path) {
        const Component = this.component

        const childRenderer = renderChildField(config, path, getValueForName(this.name), fieldName => onChange([this.name, fieldName]))

        return <Component value={getValueForName(this.name)} key={this.name} onChange={onChange([this.name])}
                          verbose={this.verbose} {...this.props} {...this.dynamicMapper(config, path)} config={config}
                          path={path} childRenderer={childRenderer}/>
    }
})
