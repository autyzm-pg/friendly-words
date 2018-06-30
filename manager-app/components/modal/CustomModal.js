import {Modal, View, Button, TouchableWithoutFeedback} from "react-native"
import * as React from "react"
import {XButton} from "../../libs/confy/components/ui/XButton"
import {withStyle} from "../../libs/withStyle"

const styles = {
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0, 0.5)",
    },
    internal: {
        backgroundColor: "white",
        padding: 10,
        margin: 14
    },
}

const CloseButton = withStyle({
    position: "absolute",
    top: 0,
    right: 0,
})(XButton)

const ExtraContainer = View

export default CustomModal = ({children, visible, onRequestClose}) => (
    <Modal animationType={"slide"}
           visible={visible}
           transparent={true}
           onRequestClose={onRequestClose}
    >
        <TouchableWithoutFeedback onPress={onRequestClose}>
            <View style={styles.wrapper}>
                <TouchableWithoutFeedback onPress={() => undefined}>
                    <ExtraContainer>
                        <View style={styles.internal}>
                            {children}
                        </View>
                        {/*<CloseButton onPress={onRequestClose}/>*/}
                    </ExtraContainer>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    </Modal>
)





