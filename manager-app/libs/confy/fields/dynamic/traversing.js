import * as R from "ramda"

export const getSiblingProp = R.curry((name, path) =>
    R.compose(
        R.append(name),
        R.dropLast(1)
    )(path)
)
export const getChildProp = R.curry((name, path) => R.append(name, path))

export const get = R.curry((path, config) =>
    R.compose(
        R.view,
        R.lensPath,
    )(path)(config))