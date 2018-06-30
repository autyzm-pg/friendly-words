import React from "react"
import Provider from "react-redux/src/components/Provider"
import store from "./config/store"
import Layout from "./components/containers/Layout"
import Router from "./config/routes"
import {Root, Text} from "native-base"
import * as R from "ramda"
import {connect} from "react-redux"
import {startApp} from "./redux/app/actions"
import withCycle from "./libs/withCycle"
import {ModalRoot} from "./components/modal/ModalRoot"

const InternalApp = ({isReady}) => (
    <Layout>
        {!isReady ?
            <Text>Loading</Text> :
            <Router/>}
    </Layout>
)

const mapDispatchToProp = dispatch => ({
    onEnter: () => dispatch(startApp())
})
const mapStateToProps = ({app}) => ({isReady: app.ready})

const EnhancedApp = R.compose(
    connect(mapStateToProps, mapDispatchToProp),
    withCycle({
        componentWillMount: ({onEnter}) => onEnter()
    })
)(InternalApp)

const App = () => (
    <Root>
        <ModalRoot>
            <Provider store={store}>
                <EnhancedApp/>
            </Provider>
        </ModalRoot>
    </Root>
)


export default App