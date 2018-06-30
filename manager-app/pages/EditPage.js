import React from "react"
import {connect} from "react-redux"
import * as R from "ramda"
import {editConfig} from "../redux/configurations/actions"
import {createWizardPage} from "../libs/confy/views/wizard/createWizardPage"
import {ConfigurationWizardView} from "../config/view"
import {goBack} from "./CreatorPage"
import {Modal, onConfirm} from "../components/modal/Modal"

const editSave = (history, handler, id, name, config) => {
    handler({id, name, config})
    history.push('/configurations')
}
const isNameCollision = (name, previousName, allNames) => previousName !== name && R.any(R.equals(name), allNames)
const onEditSave = R.curry((id, previousName, allConfigNames, handler, history, config, name) => {
    if(isNameCollision(name, previousName, allConfigNames)) {
        return Modal.ask(`Krok o nazwie '${name}' już istnieje. Czy napewno chcesz go nadpisać?`, false)
            .then(onConfirm(() => editSave(history, handler, id, name, config)))
    }
    editSave(history, handler, id, name, config)
})
const _EditPage = ({history, editConfig, fullConfig, allConfigNames}) => {
    const EditWizardPage = createWizardPage(ConfigurationWizardView, fullConfig.config)

    return <EditWizardPage name={fullConfig.name} onBack={goBack(history)} onSave={onEditSave(fullConfig.id, fullConfig.name, allConfigNames, editConfig, history)}/>
}
const dispatchToProps = dispatch => ({
    editConfig: R.compose(dispatch, editConfig.start)
})

const idEqual = expectedId => config => config.id === parseInt(expectedId)

const mapStateToProps = ({configurations}, {match}) => ({
    fullConfig: configurations.all.find(idEqual(match.params.id)),
    allConfigs: configurations.all,
    allConfigNames: configurations.all.map(R.prop('name')),
})
export const EditPage = connect(mapStateToProps, dispatchToProps)(_EditPage)