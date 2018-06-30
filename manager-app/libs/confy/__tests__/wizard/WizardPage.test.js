import * as React from "react"

import {shallow} from "enzyme"
import {_WizardPage as WizardPage} from "../../views/wizard/WizardPage";
import * as fieldsModule from "../../fields/fields"


describe('Wizard component', () => {
    const dummyOnChange = () => undefined

    it("renders at all", () => {
        const tree = shallow(
            <WizardPage steps={[]} onFieldChange={dummyOnChange} config={{}}/>
        )
        expect(tree).toBeTruthy()
    })

    it("renders a step view component", () => {
        const step = {
            view: {
                component: () => undefined
            }
        }
        const wizardViewMock = [step]

        const wrapper = shallow(<WizardPage steps={wizardViewMock} config={{}} onFieldChange={dummyOnChange}/>)
        expect(wrapper.find(step.view.component)).toHaveLength(1)
    })

    it("Gives valid props to step view component", () => {
        const step = {
            view: {
                component: () => undefined,
                props: {
                    prop1: "prop 1 value",
                    prop2: "prop 2 value"
                }
            }
        }
        const wizardViewMock = [step]

        const wrapper = shallow(<WizardPage steps={wizardViewMock} config={{}} onFieldChange={dummyOnChange}/>)

        expect(wrapper.find(step.view.component).props()).toHaveProperty('prop1', step.view.props.prop1)
        expect(wrapper.find(step.view.component).props()).toHaveProperty('prop2', step.view.props.prop2)
    })

    it("Gives an renderField function as a prop to step view component", () => {
        const step = {
            view: {
                component: () => undefined
            }
        }
        const mockRenderField = jest.fn().mockReturnValue("expected renderField return value")
        fieldsModule.renderField = mockRenderField
        const wizardViewMock = [step]

        const wrapper = shallow(<WizardPage steps={wizardViewMock} config={{}} onFieldChange={dummyOnChange}/>)

        expect(wrapper.find(step.view.component).props()).toHaveProperty('renderField', "expected renderField return value")
    })

    it("RenderField is invoked with valid config and onChange arguments", () => {
        const step = {
            view: {
                component: () => undefined
            }
        }
        const mockRenderField = jest.fn()
        fieldsModule.renderField = mockRenderField
        const wizardViewMock = [step]
        const expectedConfig = jest.fn()
        const expectedOnFieldChange = jest.fn()

        const wrapper = shallow(<WizardPage steps={wizardViewMock} config={expectedConfig} onFieldChange={expectedOnFieldChange}/>)

        expect(mockRenderField.mock.calls[0]).toContain(expectedConfig, expectedOnFieldChange)
    })

    it("Gives a config prop to step view component", () => {
        const step = {
            view: {
                component: () => undefined
            }
        }
        const wizardViewMock = [step]
        const someConfig = {}

        const wrapper = shallow(<WizardPage steps={wizardViewMock} config={someConfig} onFieldChange={dummyOnChange}/>)

        expect(wrapper.find(step.view.component).props()).toHaveProperty('config', someConfig)
    })
})