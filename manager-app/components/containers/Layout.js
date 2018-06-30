import React from "react"
import styles from "./layoutStyles"
import {StatusBar, View} from "react-native"


export default Layout = ({children}) =>
    <View style={{flex: 1}}>
        <StatusBar hidden={true}/>
        {children}
    </View>
