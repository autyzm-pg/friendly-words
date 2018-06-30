import React from "react"

export default withCycle = methods => Component => (
    class CycleWrapper extends React.Component {
        componentWillMount() {
            methods.componentWillMount(this.props)
        }

        render() {
            return <Component {...this.props}/>
        }
    }
)