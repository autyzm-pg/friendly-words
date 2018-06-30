import * as React from "react"

import {shallow} from "enzyme"
import ColumnPage from "../../views/column/ColumnPage"

describe('ColumnPage component', () => {
    const dummyOnChange = () => undefined
    const dummyConfig = {}

    it("renders at all", () => {
        const columns = []

        const tree = shallow(
            <ColumnPage columns={columns} config={dummyConfig}/>
        )
        expect(tree).toBeTruthy()
    })

    it("renders two fields from two columns", () => {
        const field1 = {component: () => undefined}
        const field2 = {component: () => undefined}
        const renderField = jest.fn()

        const columns = [
            [field1],
            [field2],
        ]

        const wrapper = shallow(<ColumnPage columns={columns} renderField={renderField} config={dummyConfig}/>)
        expect(renderField.mock.calls[0][0]).toBe(field1)
        expect(renderField.mock.calls[1][0]).toBe(field2)
    })

    it("renders two fields from one column", () => {
        const field1 = {component: () => undefined}
        const field2 = {component: () => undefined}
        const renderField = jest.fn()

        const columns = [
            [field1, field2],
        ]

        const wrapper = shallow(<ColumnPage columns={columns} renderField={renderField} config={dummyConfig}/>)
        expect(renderField.mock.calls[0][0]).toBe(field1)
        expect(renderField.mock.calls[1][0]).toBe(field2)
    })
})