import {NativeBaseFontsInitializer} from "./app/initializers"
import {ActiveConfigInitializer, ConfigsInitializer} from "./configurations/initializers"
import {ResourcesInitializers} from "./resources"

export default initializers = [
    NativeBaseFontsInitializer,
    ConfigsInitializer,
    ActiveConfigInitializer,
    ...ResourcesInitializers
]