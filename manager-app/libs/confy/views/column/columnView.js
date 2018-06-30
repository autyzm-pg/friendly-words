// @flow
import type {BaseFieldType} from "../../fields/fields";
import type {StepView} from "../steps";
import StepColumnView from "./ColumnPage"

export type ColumnType = Array<BaseFieldType>
export const Column = (fields: Array<BaseFieldType>) => fields

type ColumnViewFactory = (columns: Array<ColumnType>) => StepView
export const ColumnView: ColumnViewFactory = columns => ({
    component: StepColumnView,
    props: {
        columns,
    }
})