import React from "react"
import {connect} from "react-redux"
import * as R from "ramda"
import {createWizardPage} from "../../libs/confy/views/wizard/createWizardPage"
import {editResource} from "../../redux/resources/actions"
import {Modal, onConfirm} from "../modal/Modal"

const _EditPage = (wizardView, resourceName) => ({history, editResource, fullResource, allResourcesNames}) => {
    const EditWizardPage = createWizardPage(wizardView, fullResource)

    const goBack = () => history.push(`/resources/${resourceName}`)

    const editSave = (id, name, data) => {
        editResource(id,{...data, name})
        goBack()
    }
    const isNameCollision = (name, previousName) => previousName !== name && R.any(R.equals(name), allResourcesNames)
    const onEditSave = R.curry((id, previousName, config, name) => {
        if(isNameCollision(name, previousName)) {
            return Modal.ask(`Krok o nazwie '${name}' już istnieje. Czy napewno chcesz go nadpisać?`, false).then(onConfirm(() => editSave(id, name, config)))
        }
        editSave(id, name, config)
    })

    return <EditWizardPage name={fullResource.name} onBack={goBack} onSave={onEditSave(fullResource.id, fullResource.name)}/>
}
const dispatchToProps = resourceName => dispatch => ({
    editResource: R.compose(dispatch, R.partial(editResource.start, [resourceName]))
})

const idEqual = expectedId => config => config.id === parseInt(expectedId)

const mapStateToProps = resourceName => ({resources}, {match}) => ({
    fullResource: R.pathOr([], [resourceName, 'all'], resources).find(idEqual(match.params.id)),
    allResources: R.pathOr([], [resourceName, 'all'], resources),
    allResourcesNames: R.pathOr([], [resourceName, 'all'], resources).map(R.prop('name')),
})
export const EnhancedResourceEditPage = (resourceName, wizardView) => connect(mapStateToProps(resourceName), dispatchToProps(resourceName))(_EditPage(wizardView, resourceName))