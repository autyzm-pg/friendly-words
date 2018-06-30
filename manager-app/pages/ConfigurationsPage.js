import React from "react"

import {
    Button,
    Container,
    Content,
    Header,
    Icon,
    Left,
    List,
    ListItem,
    Right,
    Tab,
    TabHeading,
    Tabs,
    Text,
    Title
} from 'native-base'
import ConfigList, {ConfigElem} from "../components/configurations/ConfigList"
import {connect} from "react-redux"
import * as R from "ramda"
import {changeActiveConfig, changeConfigsSearchQuery, deleteConfig, saveConfig} from "../redux/configurations/actions"
import {ActionItem, ActionsMenu} from "../components/containers/ActionsMenu"
import {getNameOfCopy} from "../libs/funcs"
import {Modal, onConfirm} from "../components/modal/Modal"
import {ModeTypes} from "../db/format"
import {ListPage} from "../components/resources/ListPage"
import {EmptyState} from "../libs/confy/components/ui/EmptyState"
import {HeaderAction, HeaderButton} from "../libs/confy/components/ui/HeaderButton"

const ConfigurationsPage = ({history, configurations, allConfigs, activeMessage, searchQuery, onSearchChange, actions, isDeleteEnabled}) => {
    const goToConfigCreator = () => history.push("/creator")

    return <ListPage onBack={() => history.push("/")} title={"Konfiguracje"} rightContent={<HeaderButton action={goToConfigCreator} text={"Utwórz"} />}>
        {R.isEmpty(allConfigs)
            ? <EmptyState icon="cogs" description="Lista konfiguracji jest pusta" actionLabel="Utwórz konfiguracje"
                          action={goToConfigCreator}/>
            : <ConfigList onSearchChange={onSearchChange} searchQuery={searchQuery}>
                {configurations.map(config => (
                    <ConfigElem key={config.id}
                                item={config}
                                active={activeMessage(config)}
                                onSetActive={actions.changeActiveConfig}
                    >
                        <ActionsMenu>
                            <ActionItem onSelect={() => actions.duplicate(allConfigs, config)}>
                                <Icon name="copy"/>
                            </ActionItem>
                            <ActionItem onSelect={() => history.push(`/creator/${config.id}`)}>
                                <Icon name="create"/>
                            </ActionItem>
                            <ActionItem onSelect={() => actions.changeActiveConfig(config.id)}>
                                <Icon name="arrow-up"/>
                            </ActionItem>
                            <ActionItem isEnabled={isDeleteEnabled} onSelect={() => actions.delete(config)}>
                                <Icon name="trash"/>
                            </ActionItem>
                        </ActionsMenu>
                    </ConfigElem>
                ))}
            </ConfigList>
        }
    </ListPage>
}

const stateToProps = ({configurations}) => ({
    allConfigs: configurations.all,
    configurations: R.reverse(configurations.all.filter(({name}) => name.toLowerCase().includes(configurations.searchQuery))),
    searchQuery: configurations.searchQuery,
    activeMessage: R.ifElse(
        config => config.id === configurations.active.id,
        () => configurations.active.mode === ModeTypes.learning ? "aktywne uczenie" : "aktywny test",
        R.always(undefined)
    ),
    isDeleteEnabled: configurations.all.length > 1
})

const askForMode = () => Modal.optionAsk("W jakim trybie chcesz aktywować krok?", [
    {verbose: "Uczenie", value: ModeTypes.learning, primary: true},
    {verbose: "Test", value: ModeTypes.test}
]).then(R.prop('value'))

const dispatchToProps = (dispatch, ownProps) => ({
    onSearchChange: R.compose(dispatch, changeConfigsSearchQuery),
    actions: {
        changeActiveConfig: id => askForMode().then(mode => dispatch(changeActiveConfig({id, mode}))),
        duplicate: R.compose(
            dispatch,
            R.apply(saveConfig),
            (allConfigs, config) => [
                getNameOfCopy(allConfigs.map(R.prop('name')), config.name),
                config.config
            ]
        ),
        delete: (config) => Modal.ask(`Czy napewno chcesz usunąć '${config.name}'?`, false)
            .then(onConfirm(() => dispatch(deleteConfig.start(config))))
    }
})

export default R.compose(
    connect(stateToProps, dispatchToProps)
)(ConfigurationsPage)