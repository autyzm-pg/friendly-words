import React from "react"
import {Button, Text, View} from "native-base"
import {withStyle} from "../../../libs/withStyle"

const styles = {
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    buttons: {
        marginLeft: 5,
        marginRight: 5,
    }
}

const StyledButton = withStyle(styles.buttons)(Button)
const ButtonsContainer = withStyle(styles.buttonsContainer)(View)

export default OptionAsker = options => ({children, onConfirm, onCancel}) => (
    <View>
        <Text>{children}</Text>
        <ButtonsContainer>
            {options.map(({verbose, value, primary=false}) => (
                <StyledButton transparent={!primary} key={value} onPress={() => onConfirm(value)}>
                    <Text>{verbose}</Text>
                </StyledButton>
            ))}
        </ButtonsContainer>
    </View>
)