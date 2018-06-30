import {Toast} from "native-base"

export default ToastExt = {
    success: (text, options = {}) => {
        Toast.show({
            text,
            position: "bottom",
            buttonText: "OK",
            type: "success",
            duration: 12000,
            ...options
        })
    }
}