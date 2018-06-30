import R from "ramda"

export const catchError = R.curry((expectedError, error) => {
    if(error === expectedError) {
        return {cancelled: true}
    }
    throw error
})