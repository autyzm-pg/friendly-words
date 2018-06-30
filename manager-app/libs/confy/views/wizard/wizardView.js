// @flow
import type {ModelType} from "../../models"
import type {Step, StepView} from "../steps"
import {WizardPage, WizardSinglePage} from "./WizardPage"

export type WizardViewType<M, Props> = {
    model: M,
    component: any,
    props: Props
}

type WizardStepViewProps = {
    steps: Array<Step>
}
type WizardStepViewType<M> = WizardViewType<M, WizardStepViewProps>
type ViewDefiner<F> = (fields: F) => Array<Step>

export const WizardView = <T: {}, M: ModelType<T>>(defineView: ViewDefiner<$PropertyType<M, 'fields'>>, model: M): WizardStepViewType<M> => ({
    model,
    component: WizardPage,
    props: {
        steps: defineView(model.fields)
    }
})
type WizardStepFactory = (string, StepView) => Step
export const WizardStep: WizardStepFactory = (name, view) => ({name, view})


type WizardSingleViewProps = {
    step: Step
}
type WizardSingleViewType<M> = WizardViewType<M, WizardStepViewProps>
type SingleViewDefiner<F> = (fields: F) => Step

export const WizardSingleView = <T: {}, M: ModelType<T>>(defineView: SingleViewDefiner<$PropertyType<M, 'fields'>>, model: M): WizardStepViewType<M> => ({
    model,
    component: WizardSinglePage,
    props: {
        view: defineView(model.fields)
    }
})



