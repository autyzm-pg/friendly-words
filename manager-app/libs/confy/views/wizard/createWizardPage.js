import type {ModelType} from "../../models"
import type {WizardViewType} from "./wizardView"
import * as R from "ramda"
import {withRedux} from "../../libs/redux/withRedux"
import {mapDispatchToProps, mapStateToProps, reducer} from "./wizardRedux"
import withProps from "../../libs/withProps"

export const createWizardPage = <T: {}, M: ModelType<T>, Props>(wizardView: WizardViewType<M, Props>, config: any = undefined) => R.compose(
    withRedux(reducer(config || wizardView.model.getDefaultConfig()), mapStateToProps, mapDispatchToProps),
    withProps({...wizardView.props}),
)(wizardView.component)