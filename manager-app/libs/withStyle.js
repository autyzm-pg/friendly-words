import React from "react"

export const withStyle = styles => Component => {
    const wrapped = (props) => <Component style={styles} {...props}/>
    wrapped.displayName = `withStyle(${Component.displayName || Component.name || "Undefined"})`
    return wrapped;
}