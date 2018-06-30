import 'react-native'
import React from 'react'

import FieldPickerView from "../../fields/options/PickerInput";
import {shallow} from "enzyme"

describe('PickerInput component', () => (
    it("renders at all", () => {
        const tree = shallow(
            <FieldPickerView value="" onChange={() => undefined} verbose="" options={[]}/>
        )
        expect(tree).toBeTruthy();
    })
))