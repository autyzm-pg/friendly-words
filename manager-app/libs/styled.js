import React from "react"
import {StyleSheet} from "react-native"
import R from "ramda"

const GetStyledComponent = (Component, elementStyles) => props => {
    const newStyle = R.pipe(
        R.ifElse(
            () => Array.isArray(props.style),
            style => [style, ...props.style],
            style => [style, props.style]
        )
    )(elementStyles)

    return (
        <Component {...props} style={newStyle}/>
    )
}

const simpleStyled = R.curry((Component, style) => {
    const styles = StyleSheet.create({element: style})

    return GetStyledComponent(Component, styles.element)
})

const functionStyled = R.curry((Component, styleFunction) => {
    return props => {
        const styles = StyleSheet.create({element: styleFunction(props)})
        const StyledComponent = GetStyledComponent(Component, styles.element)
        return <StyledComponent {...props}/>
    }
})

export const styled = R.curry((Component, style) => R.ifElse(
    R.is(Function),
    R.always(functionStyled),
    R.always(simpleStyled)
)(style)(Component, style))

