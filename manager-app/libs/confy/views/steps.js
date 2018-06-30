// @flow
import * as React from "react"
import type {BaseFieldType} from "../fields/fields"

export type StepView = {
    component: any,
    props: any
}

export type Step = {
    name: string,
    view: StepView
}

export type ChangeHandler = (string) => () => void

export type StepPageProps = {
    config: *,
    renderField: (BaseFieldType) => any
}