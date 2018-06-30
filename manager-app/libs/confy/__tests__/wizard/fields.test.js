import {shallow} from "enzyme"
import {renderField} from "../../fields/fields"
import * as React from "react"
import {View} from "react-native-mock"

describe('Wizard component', () => {
    const dummyOnChange = () => undefined

    it("renders at all", () => {
        const config = {}
        const field = {
            component: () => <View/>
        }
        const wrapper = shallow(renderField(config, dummyOnChange)(field))

        expect(wrapper).toBeTruthy()
    })

    it.skip("has verbose prop", () => {
        const config = {}
        const field = {
            component: () => <View/>,
            verbose: "Some verbose description"
        }
        const wrapper = shallow(renderField(config, dummyOnChange)(field))

        expect(wrapper.instance().props).toHaveProperty('verbose', field.verbose)
    })

    it.skip("has 'value' prop with expected value", () => {
        const fieldName = "someFieldName"
        const config = {
            [fieldName]: 'this value should be inserted into the "value" prop'
        }
        const field = {
            name: fieldName,
            component: () => <View/>,
        }
        const wrapper = shallow(renderField(config, dummyOnChange)(field))

        expect(wrapper.instance().props).toHaveProperty('value', config[fieldName])
    })
})