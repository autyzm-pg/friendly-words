import {catchError} from "../../libs/errors"
import {uploadAssetsDirectory} from "../../../../fileSystem/paths"
import path from "path"
import R from "ramda"
import {copyAsync} from "../../../../fileSystem/file"
import ImagePicker from 'react-native-image-picker'

export const CanceledError = "Cancelled image picking"

export const addImage = asyncPicker => () => asyncPicker()
    .then(R.when(
        result => result.didCancel,
        () => {
            throw CanceledError
        }
    ))
    .then(R.when(
        result => result.error,
        result => {
            throw {
                name: "Unexpected error",
                data: result.error
            }
        }
    ))
    .then(({uri, width, height}) => ({
        width,
        height,
        cancelled: false,
        from: uri,
        uri: path.join(uploadAssetsDirectory, path.basename(uri))
    }))
    .then(data =>
        copyAsync(data.from, data.uri).then(R.always(data))
    )
    .catch(catchError(CanceledError))

export const addImageFromLibrary = addImage(() => new Promise(resolve => ImagePicker.launchImageLibrary({allowsEditing: true}, resolve)))
export const addImageFromCamera = addImage(() => new Promise(resolve => ImagePicker.launchCamera({allowsEditing: true}, resolve)))