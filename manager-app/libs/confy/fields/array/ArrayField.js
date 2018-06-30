import ArrayInput from "./ArrayInput"
import {_renderField} from "../fields"

export const ArrayField = (verbose, field, component = ArrayInput) => name => ({
    name,
    verbose,
    component,
    dynamicMapper: () => ({}),
    props: {
        field: {
            ...field(),
            renderField(value, onChange, config, path) {
                return _renderField.call(this, () => value, () => onChange, config, path)
            }
        }
    },

    getDefaultValue() {
        return []
    },

    renderField: _renderField
})