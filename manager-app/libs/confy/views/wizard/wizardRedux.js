import {createReducer} from "../../../reducers"
import * as R from "ramda"

const fieldChangeActionType = "_WIZARD_CHANGE_FIELD"

export const reducer = (defaultConfig) => createReducer(defaultConfig, {
    [fieldChangeActionType]: (config, {payload, fieldPath}) => R.set(R.lensPath(fieldPath), payload, config)
})

export const mapStateToProps = config => ({config})

export const changeField = (fieldPath, value) => ({
    type: fieldChangeActionType,
    fieldPath,
    payload: value
})

export const mapDispatchToProps = dispatch => ({
    onFieldChange: fieldPath => value => dispatch(changeField(fieldPath, value))
})
