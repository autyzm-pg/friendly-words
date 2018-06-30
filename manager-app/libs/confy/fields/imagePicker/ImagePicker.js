import React from "react"
import {Text, View, Button, ListItem, Right, List, Icon} from "native-base"
import R, {identity} from "ramda"
import {Image, TouchableOpacity} from 'react-native'
import {addImageFromCamera, addImageFromLibrary} from "./imageHandling"
import {ifConfirmOrElse, Modal, onConfirm} from "../../../../components/modal/Modal"
import {withStyle} from "../../../withStyle"
import {catchError} from "../../libs/errors"
import {imagePickerStyles} from "./styles"
import {PlusButton} from "../../components/ui/PlusButton"
import {XButton} from "../../components/ui/XButton"
import withState from "../../libs/withState"

const styles = {
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 10,
        width: 300,
    },
    buttons: {
        marginLeft: 5,
        marginRight: 5,
    }
}

const StyledButton = withStyle(styles.buttons)(Button)
const ButtonsContainer = withStyle(styles.buttonsContainer)(View)
const SourceText = withStyle({
    marginLeft: 10,
})(Text)

const SourceOptions = {
    camera: "camera",
    device: "device"
}

const enhanceSourceChooser = withState(
    {
        chosenOption: undefined,
    },
    identity,
    setState => ({
        chooseOption: value => setState({
            chosenOption: value
        })
    })
)

const RadioContainer = withStyle({
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
})(TouchableOpacity)

const RadioLabel = withStyle({
    flexDirection: "row"
})(View)

export const Radio = ({children, selected, onChange}) => (
    <RadioContainer onPress={onChange}>
        <RadioLabel>
            {children}
        </RadioLabel>
        {selected ? <Icon name='radio-button-on'/> : <Icon name='radio-button-off'/>}
    </RadioContainer>
)

const SourceChooser = enhanceSourceChooser(function SourceChooser({onConfirm, onCancel, chosenOption, chooseOption}) {
    return (
        <View>
            <Text>Dodaj obraz:</Text>
            <List>
                <ListItem>
                    <Radio selected={chosenOption === SourceOptions.camera}
                           onChange={() => chooseOption(SourceOptions.camera)}>
                        <Icon name="camera"/>
                        <SourceText>Zrób zdjęcie</SourceText>
                    </Radio>
                </ListItem>
                <ListItem>
                    <Radio selected={chosenOption === SourceOptions.device}
                           onChange={() => chooseOption(SourceOptions.device)}>
                        <Icon name="folder"/>
                        <SourceText>Dodaj z urządzenia</SourceText>
                    </Radio>
                </ListItem>
            </List>
            <ButtonsContainer>
                <Button transparent onPress={onCancel}><Text>Anuluj</Text></Button>
                <Button style={{marginLeft: 25}} primary onPress={() => onConfirm(chosenOption)}
                        disabled={!chosenOption}><Text>Wybierz</Text></Button>
            </ButtonsContainer>
        </View>
    )
})

const onImageAddPress = addImage => () => Modal.custom(SourceChooser)
    .then(ifConfirmOrElse(
        R.ifElse(
            R.equals(SourceOptions.camera),
            addImageFromCamera,
            addImageFromLibrary,
        ),
        () => ({cancelled: true})
    ))
    .then(R.when(
        result => !result.cancelled,
        ({uri, width, height}) => addImage({width, height, uri: `file://${uri}`})
    ))

const removeUriFromList = (uri, all) => R.pipe(
    R.propEq('uri'),
    R.complement,
    R.filter,
)(uri)(all)

const ImageContainer = ({children, onDelete}) => (
    <View>
        <View style={imagePickerStyles.imageContainer}>
            {children}
        </View>
        <XButton small style={imagePickerStyles.deleteButton} onPress={onDelete}/>
    </View>
)

const onImageDelete = onDeleteConfirmed => () =>
    Modal.ask("Czy napewno chcesz usunąć ten obrazek?", false)
        .then(onConfirm(onDeleteConfirmed))

const ImageUploader = ({verbose, value, onChange, options}) => (
    <View style={imagePickerStyles.container}>
        <View style={{flexDirection: "row"}}>
            <Text>{verbose}</Text>
            <Button style={imagePickerStyles.addButton} onPress={onImageAddPress(image => onChange([...value, image]))}>
                <Text>Dodaj</Text>
            </Button>
        </View>
        <View style={[imagePickerStyles.imagesContainer, value.length === 0 && {justifyContent: "center"}]}>
            {value.length === 0 && <Text style={imagePickerStyles.emptyText}>Brak obrazków</Text>}
            {value.map(({uri, width, height}) =>
                <ImageContainer key={uri} onDelete={onImageDelete(() => onChange(removeUriFromList(uri, value)))}>
                    {console.log("URI:", uri, width, height) && null}
                    <Image source={{uri}} style={imagePickerStyles.image}/>
                </ImageContainer>
            )}
        </View>
    </View>
)


export default ImageUploader

