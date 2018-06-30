import React from "react"
import {Icon, Text, View} from "native-base"
import {ScrollView} from "react-native"
import * as R from "ramda"
import styles from "./styles"

export default TestObjectInput = ({verbose, value, model, childRenderer, config}) => {
    const finalRepetitionsNumber = value.numberOfRepetitions * config.materials.length
    const repetitions = R.cond([
        [R.equals(1), R.always("powtórzenie")],
        [value => value > 1 && value < 5, R.always("powtórzenia")],
        [R.T, R.always("powtórzeń")]
    ])(finalRepetitionsNumber)

    return (
        <ScrollView contentContainerStyle={styles.outerContainer}>
            <View style={styles.container}>
                {R.values(model.fields).map(field => (
                    <View key={field.name}>
                        {childRenderer(field)}
                    </View>
                ))}
                <View>
                    <Text>Łącznie: {finalRepetitionsNumber} {repetitions}</Text>
                </View>
                <View style={styles.informationContainer}>
                    <View style={styles.informationIcon}>
                        <Icon color="#fff" name={"information-circle"}/>
                    </View>
                    <View style={styles.informationText}>
                        <Text style={{marginBottom: 10}}>
                            W trybie testu dziecko pracuje na materiałach zaznaczonych w zakładce Materiał.
                        </Text>
                        <Text>
                            W Trybie Testu aplikacja nie korzysta z ustawień z zakładki Uczenie oraz Wzmocnienia, a
                            terapeuta powinien powstrzymać się od interwencji w interakcje dziecka aż do zakończenia
                            testu.
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}