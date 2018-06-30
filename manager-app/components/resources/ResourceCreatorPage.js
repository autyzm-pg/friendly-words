import React from "react"
import {Container, Content, Header, Body, Title, Button, Text, Tab, Tabs, TabHeading, Icon, Left} from 'native-base'

import * as R from "ramda"
import {connect} from "react-redux"
import {createWizardPage} from "../../libs/confy/views/wizard/createWizardPage"
import {Modal, onConfirm} from "../modal/Modal"
import {addResource} from "../../redux/resources/actions"


const ResourceCreatorPage = (ResourceView, resourceName) => ({history, saveResource, allNames}) => {
    const WizardPage = createWizardPage(ResourceView)

    const goBack = () => history.push(`/resources/${resourceName}`)

    const createSave = (name, data) => {
        saveResource({...data, name})
        goBack()
    }
    const onCreateSave = R.curry((data, name) => R.ifElse(
        R.any(R.equals(name)),
        () => Modal.ask(`Zasób o nazwie '${name}' już istnieje. Czy napewno chcesz go nadpisać?`, false).then(onConfirm(() => createSave(name, data))),
        () => createSave(name, data)
    )(allNames))

    return <WizardPage name="Nowy zasób" onBack={goBack}
                       onSave={onCreateSave}/>
}

const dispatchToProps = (resourceName) => dispatch => ({
    saveResource: R.compose(dispatch, R.partial(addResource.start, [resourceName]))
})

const mapStateToProps = (resourceName) => ({resources}) => ({
    allNames: R.pathOr([], [resourceName, 'all'], resources).map(R.prop('name')),
})

export const EnhancedResourceCreatorPage = (resourceName, View) => connect(mapStateToProps(resourceName), dispatchToProps(resourceName))(ResourceCreatorPage(View, resourceName))