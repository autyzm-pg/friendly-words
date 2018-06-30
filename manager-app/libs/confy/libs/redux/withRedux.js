import * as React from "react"

export const withRedux = (reducer=()=>undefined, mapStateToProps=()=>({}), mapDispatchToProps=()=>({}), initialState=undefined) => (Component) => (
    class ReduxWrapper extends React.Component {
        constructor(){
            super()
            this.state = {store: initialState}
            this.state = {store: reducer(this.state.store, {type: "__REDUX_INIT"})}

            this.dispatch = this.dispatch.bind(this)
        }

        dispatch(action) {
            this.setState((prevState) => ({store: reducer(prevState.store, action)}))
        }

        render() {
            const newProps = mapStateToProps(this.state.store, this.props)
            const dispatchProps = mapDispatchToProps(this.dispatch, {...this.props, ...newProps})
            return (
                <Component {...newProps} {...dispatchProps} {...this.props}/>
            )
        }
    }
)