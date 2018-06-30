import React from "react"
import {ListPage} from "../resources/ListPage"
import {ResourceElem, ResourceList} from "../resources/ResourcesList"
import {ActionItem, ActionsMenu} from "./ActionsMenu"
import {Icon} from "native-base"
import * as R from "ramda"
import withProps from "../../libs/confy/libs/withProps"
import {connect} from "react-redux"
import {Modal, onConfirm} from "../modal/Modal"
import {deleteResource} from "../../redux/resources/actions"
import {EmptyState} from "../../libs/confy/components/ui/EmptyState";
import {HeaderButton} from "../../libs/confy/components/ui/HeaderButton";

export const ResourcesPage = ({history, resources, isDeleteEnabled, actions, title, resourceName, ResourceBox}) => {
    const goToResourceCreator = () => history.push(`/creator/resource/${resourceName}`)

    return <ListPage onBack={() => history.push("/")} title={title} rightContent={<HeaderButton action={goToResourceCreator} text={"Utwórz"}/>}>
        {R.isEmpty(resources)
            ? <EmptyState icon="folder-open" action={goToResourceCreator} description="Lista zasobów jest pusta" actionLabel={"Utwórz zasób"}/>
            :<ResourceList>
            {resources.map(resource =>
                <ResourceElem key={resource.id} item={<ResourceBox item={resource}/>}>
                    <ActionsMenu>
                        <ActionItem onSelect={() => history.push(`/creator/resource/${resourceName}/${resource.id}`)}>
                            <Icon name="create"/>
                        </ActionItem>
                        <ActionItem isEnabled={isDeleteEnabled} onSelect={() => actions.delete(resource)}>
                            <Icon name="trash"/>
                        </ActionItem>
                    </ActionsMenu>
                </ResourceElem>
            )}
        </ResourceList>
        }
    </ListPage>
}

const mapStateToProps = resourceName => ({resources}) => ({
    resources: resources[resourceName].all,
    isDeleteEnabled: resources[resourceName].all.length > 1
})

const mapDispatchToProps = (resourceName, toString) => dispatch => ({
    actions: {
        delete: (resource) => Modal.ask(`Czy napewno chcesz usunąć '${toString(resource)}'?`, false)
            .then(onConfirm(() => dispatch(deleteResource.start(resourceName, resource.id))))
    }
})

export const enhancePage = (resourceName, resourceTitle, resourceComponent, toString) => R.compose(
    withProps({resourceName, title: resourceTitle, ResourceBox: resourceComponent}),
    connect(mapStateToProps(resourceName), mapDispatchToProps(resourceName, toString))
)

export const EnhancedResourcesPage = (...args) => enhancePage(...args)(ResourcesPage)