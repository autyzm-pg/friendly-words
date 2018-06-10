import {withContext} from "recompose";
import PropTypes from "prop-types";

export const childContextTypes = {
    config: PropTypes.object,
    mode: PropTypes.number
};

const getChildContext = ({config, mode}) => ({config, mode});

const ConfigProvider = ({children}) => children;

export default withContext(childContextTypes, getChildContext)(ConfigProvider);