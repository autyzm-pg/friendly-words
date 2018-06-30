import {get, getChildProp, getSiblingProp} from "./traversing"

describe("get function", () => {
    it("should return value with given path", () => {
        const obj = {
            some: {
                complex: [
                    0,
                    "path"
                ]
            }
        }

        const result = get(['some', 'complex', 1], obj)

        expect(result).toBe("path")
    })
})

describe("getSibling function", () => {
    it("should return path to given sibling", () => {
        const somePath = ['some', 'complex', 0, 'path']

        const result = getSiblingProp('siblingName', somePath)

        expect(result).toEqual(['some', 'complex', 0, 'siblingName'])

    })
})

describe("getChildProp function", () => {
    it("should return path to given sibling", () => {
        const somePath = ['some', 'complex', 0, 'path']

        const result = getChildProp('childname', somePath)

        expect(result).toEqual(['some', 'complex', 0, 'path', 'childname'])

    })
})