import React from "react"
import {Button, Icon, List, ListItem, Text, View} from "native-base"
import * as R from "ramda"
import {Field} from "../../../libs/confy/fields/fields"
import {ScrollView, TouchableOpacity} from "react-native"
import styles from "./styles"
import {styled} from "../../../libs/styled"
import {connect} from "react-redux"
import {Modal, onConfirm} from "../../../components/modal/Modal"
import {Model} from "../../../libs/confy/models"
import {ActionItem} from "../../../components/containers/ActionsMenu"
import {Cell, Row, Table} from "../../../components/table/Table"
import {ListLabel} from "../../../libs/confy/components/ui/ListLabels"
import {EmptyState} from "../../../libs/confy/components/ui/EmptyState"
import {withLink} from "../../../libs/confy/libs/withState"

const chooseResource = resources => new Promise(resolve => (
    Modal.show(
        <View>
            <Text>Wybierz słowo, które chcesz dodać do konfiguracji</Text>
            <ScrollView style={{marginTop: 10}}>
                <List>
                    {resources
                        .map(resource => (
                            <ListItem key={resource.id} onPress={() => {
                                Modal.hide()
                                resolve(resource)
                            }}>
                                <Text>{resource.name}</Text>
                            </ListItem>
                        ))}
                </List>
            </ScrollView>
        </View>
    )
))

const AddButton = styled(Button, {
    position: "absolute",
    right: 0,
    bottom: 0,
})

const createNewMaterial = R.curry((model, word) => ({
    ...model.getDefaultConfig(),
    word
}))

const onFieldChange = R.curry((onChange, currentValue, index, fieldName, newValue) => onChange(R.set(
    R.lensPath([index, fieldName]),
    newValue,
    currentValue
)))

const selectFirstImage = material => ({
    ...material,
    images: material.word.images.length > 0 ? [
        ...material.images,
        R.pick(['uri'], material.word.images[0])
    ] : material.images,
})

const onAddWord = (model, value, onChange, resource) => R.pipe(
    createNewMaterial(model),
    R.tap((...args) => console.log(...args)),
    selectFirstImage,
    R.tap((...args) => console.log(...args)),
    R.append(R.__, value),
    onChange
)(resource)

const SelectableRow = styled(Row, ({isSelected}) => ({
    backgroundColor: isSelected ? 'white' : 'transparent'
}))

const MaterialsTable = ({materials, fields, onRowChange, onRowDelete, selected, onSelect}) => (
    <Table>
        <Row style={styles.tableHeader}>
            <Cell><ListLabel text={"Słowo"}/></Cell>
            <Cell><ListLabel text={"W uczeniu"}/></Cell>
            <Cell><ListLabel text={"W teście"}/></Cell>
            <Cell><ListLabel text={"Usuń"}/></Cell>
        </Row>
        {materials.map((material, index) => (
            <SelectableRow isSelected={index === selected}
                           key={material.word.name}>
                <Cell>
                    <TouchableOpacity onPress={() => onSelect(index)}>
                        <Text>{material.word.name}</Text>
                    </TouchableOpacity>
                </Cell>
                <Cell>
                    {fields.isInLearningMode.renderField(
                        R.always(material.isInLearningMode),
                        onRowChange(index)
                    )}
                </Cell>
                <Cell>
                    {fields.isInTestMode.renderField(
                        R.always(material.isInTestMode),
                        onRowChange(index)
                    )}
                </Cell>
                <Cell>
                    <ActionItem
                        onSelect={() => Modal.ask("Usunac slowo z konfiguracji?", false).then(onConfirm(() => onRowDelete(material)))}>
                        <Icon name="trash"/>
                    </ActionItem>
                </Cell>
            </SelectableRow>
        ))}
    </Table>
)

const MaterialDetails = ({material = undefined, renderField}) => (
    <ScrollView>
        {!material ? <Text>Wybierz materiał w tabeli obok</Text> :
            <View>
                {renderField(material)}
            </View>
        }
    </ScrollView>
)

const getIndex = (selected, all) => R.findIndex(R.pathEq(['word', 'name'], selected.word.name), all)
const onImagesChange = (onChange, material, all) => (newImages) => onChange(R.assocPath([getIndex(material, all), 'images'], newImages, all))

const _MaterialsArrayInput = ({value, onChange, resources, materialModel, selectedMaterialIndex, selectedMaterialIndexChange, path, config}) => {
    const onAdd = () => chooseResource(resources.filter(({name}) => !R.contains(name, value.map(R.path(['word', 'name'])))))
        .then(resource => onAddWord(materialModel, value, onChange, resource))
        .then(() => selectedMaterialIndexChange(value.length))

    return (
        R.isEmpty(value) ? <EmptyState icon={"list"} description={"Lista jest pusta"} actionLabel={"Dodaj materiał"}
                                       action={onAdd}/> :
            <View style={styles.container}>
                <View style={styles.listContainer}>
                    <View>
                        <MaterialsTable
                            materials={value}
                            onSelect={selectedMaterialIndexChange}
                            selected={selectedMaterialIndex}
                            onRowChange={onFieldChange(onChange, value)}
                            onRowDelete={material => onChange(value.filter(materialInArray => materialInArray.word.name !== material.word.name))}
                            fields={materialModel.fields}/>
                    </View>
                    <AddButton onPress={onAdd}>
                        <Text>Dodaj</Text>
                    </AddButton>
                </View>
                <View style={styles.detailsContainer}>
                    <MaterialDetails
                        material={value[selectedMaterialIndex]}
                        renderField={material => materialModel.fields.images.renderField(
                            R.always(material.images),
                            () => onImagesChange(onChange, material, value),
                            config,
                            [...path, getIndex(material, value), 'images']
                        )}
                    />
                </View>
            </View>
    )
}


const mapStateToProps = (state, {materialModel}) => ({
    resources: materialModel.fields.word.props.model.mapStateToList(state)
})

const MaterialsArrayInput = R.compose(
    connect(mapStateToProps),
    withLink("selectedMaterialIndex", undefined),
)(_MaterialsArrayInput)

export const MaterialsArrayField = (materialModel) => Field(MaterialsArrayInput, {
    def: [],
    materialModel: Model("Material", materialModel)
})()

