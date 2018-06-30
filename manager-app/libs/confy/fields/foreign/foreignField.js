import {Field} from "../fields"
import * as R from "ramda"

export const ForeignField = (verbose, model) => Field(undefined, {model, def: null})(verbose)