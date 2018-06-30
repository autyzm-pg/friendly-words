import React from "react"
import {Content, List, ListItem, Right, TabHeading, Tabs, Tab, Text, View} from "native-base"
import * as R from "ramda"

export const WizardStepsContainer = ({children}) => (
    <Tabs locked>
        {
            React.Children.map(children, child => child.type({...child.props}))
        }
    </Tabs>
)

export const WizardStepView = ({name, key, children}) => (
    <Tab key={key} heading={ <TabHeading><Text>{name}</Text></TabHeading>}>
        {children}
    </Tab>
)

