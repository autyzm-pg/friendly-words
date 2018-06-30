import * as React from "react"

export default withProps = (injectedProps) => (Component) => (props) => <Component {...injectedProps} {...props}/>