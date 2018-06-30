import * as React from "react"

import {shallow} from "enzyme"
import {withRedux} from "../../libs/redux/withRedux"
import {View} from "react-native-mock"

describe("withRedux HOC", () => {
    const dummyComponent = () => undefined

    it("renders passed component", () => {
        const Component = withRedux()(dummyComponent)

        const wrapper = shallow(<Component/>)
        expect(wrapper.find(dummyComponent)).toHaveLength(1)
    })

    it("Gives top props to component", () => {
        const Component = withRedux()(dummyComponent)

        const wrapper = shallow(<Component prop1={1} prop2="test"/>)

        const passedProps = wrapper.find(dummyComponent).props()
        expect(passedProps).toHaveProperty('prop1', 1)
        expect(passedProps).toHaveProperty('prop2', "test")
    })

    it("invokes reducer first time", () => {
        const reducer = jest.fn()
        const Component = withRedux(reducer)(dummyComponent)

        shallow(<Component/>)

        expect(reducer).toBeCalledWith(undefined, {type: "__REDUX_INIT"})
    })

    it("invokes mapStateToProps first time", () => {
        const mapStateToProps = jest.fn()
        const Component = withRedux(undefined, mapStateToProps)(dummyComponent)

        shallow(<Component/>)

        expect(mapStateToProps).toBeCalledWith(undefined, {})
    })

    it("invokes mapStateToDispatch first time", () => {
        const mapStateToDispatch = jest.fn()
        const Component = withRedux(undefined, undefined, mapStateToDispatch)(dummyComponent)

        shallow(<Component/>)

        expect(mapStateToDispatch.mock.calls[0][1]).toEqual({})
    })

    it("invokes reducer first time with initialState", () => {
        const initialState = "some initial state"
        const reducer = jest.fn()
        const Component = withRedux(reducer, undefined, undefined, initialState)(dummyComponent)

        shallow(<Component/>)

        expect(reducer).toBeCalledWith(initialState, {type: "__REDUX_INIT"})
    })

    it("passes props returned by mapDispatchToProps", () => {
        const mappedProps = {
            someProp1: 1,
            someProp2: "some prop"
        }
        const mapDispatchToProps = jest.fn().mockReturnValue(mappedProps)
        const Component = withRedux(undefined, undefined, mapDispatchToProps)(dummyComponent)

        const wrapper = shallow(<Component/>)

        const passedProps = wrapper.find(dummyComponent).props()
        expect(passedProps).toHaveProperty('someProp1', 1)
        expect(passedProps).toHaveProperty('someProp2', "some prop")
    })

    it("invokes reducer after dispatching with valid action", () => {
        const reducer = jest.fn()
        const mapDispatchToProps = (dispatch) => ({dispatch})
        const action = "SOME ACTION"
        const Component = withRedux(reducer, undefined, mapDispatchToProps)(dummyComponent)

        const wrapper = shallow(<Component/>)
        wrapper.find(dummyComponent).props().dispatch(action)

        expect(reducer.mock.calls[1]).toEqual([undefined, action])
    })

    it("invokes mapStateToProps with new state after action dispatch", () => {
        const expectedStoreValue = "expected value"
        const reducer = jest.fn().mockReturnValue(undefined).mockReturnValue(expectedStoreValue)
        const mapDispatchToProps = (dispatch) => ({dispatch})
        const mapStateToProps = jest.fn().mockReturnValue({}).mockReturnValue({})

        const Component = withRedux(reducer, mapStateToProps, mapDispatchToProps)(dummyComponent)

        const wrapper = shallow(<Component/>)
        wrapper.find(dummyComponent).props().dispatch(undefined)

        expect(mapStateToProps.mock.calls[1]).toEqual([expectedStoreValue, {}])
    })

    it.skip("dispatch invokes reducer with valid action and previous state", () => {
        const someAction = "some action"
        const initialState = "initial state"
        const reducer = jest.fn().mockReturnValue(initialState)

        const Component = withRedux(reducer, undefined, undefined, initialState)(dummyComponent)
        const wrapper = shallow(<Component/>)
        wrapper.instance().dispatch(someAction)



        expect(reducer.mock.calls[1]).toEqual([initialState, someAction])
    })

    it.skip("dispatch invokes setState with valid value received from reducer", () => {
        const newState = "some new state"
        const reducer = jest.fn().mockReturnValue(undefined).mockReturnValue(newState)
        const setState = jest.fn()

        const Component = withRedux(reducer)(dummyComponent)

        const wrapper = shallow(<Component/>)
        wrapper.instance().setState = setState
        wrapper.instance().dispatch(undefined)

        const [stateChangeFunction] = setState.mock.calls[0]

        expect(stateChangeFunction({field1: "Some previousValue of the state"})).toEqual({store: newState})
    })
})