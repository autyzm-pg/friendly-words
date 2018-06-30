import {changeField, reducer} from "../../views/wizard/wizardRedux"

describe("Wizard Reducer", () => {
    it("Returns default config when previous is undefined", () => {
        const someDefaultConfig = { test: 1}

        const result = reducer(someDefaultConfig)(undefined, {type: "UNEXPECTED"})

        expect(result).toEqual(someDefaultConfig)
    })

    it("Returns previous config when action is unrecognized", () => {
        const someConfig = { test: 1}

        const result = reducer()(someConfig, {type: "UNEXPECTED"})

        expect(result).toEqual(someConfig)
    })

    it("Sets top level property with given value", () => {
        const someConfig = { property1: 1, property2: "must be the same" }
        const expectedConfig = { property1: "newValue", property2: "must be the same" }

        const result = reducer()(someConfig, changeField(['property1'], "newValue"))

        expect(result).toEqual(expectedConfig)
    })

    it("Sets nested property with given value", () => {
        const someConfig = {
            property1: {
                nestedProperty1: 100,
                nestedPropertt2: "must be the same"
            },
            property2: "must be the same"
        }
        const expectedConfig = {
            property1: {
                nestedProperty1: "newValue",
                nestedPropertt2: "must be the same"
            },
            property2: "must be the same"
        }

        const result = reducer()(someConfig, changeField(['property1', 'nestedProperty1'], "newValue"))

        expect(result).toEqual(expectedConfig)
    })
})