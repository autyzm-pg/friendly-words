import {getContext} from "recompose"
import {childContextTypes} from "./ConfigProvider"

const ConfigConsumer = ({children, config, mode}) => children(config, mode);

export default getContext(childContextTypes)(ConfigConsumer);