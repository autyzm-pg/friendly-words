import {copyFile, writeFile, readFile, mkdir} from "react-native-fs"
import {tap} from "ramda"
import * as path from "path"

const makeParentsBefore = func => (filename, ...args) => mkdir(path.dirname(filename)).then(() => func(filename, ...args))

export const readFileAsync = file => readFile(file).then(tap(test => console.log(" LOADED", test)))
export const writeFileAsync = makeParentsBefore(writeFile)
export const copyAsync = (from, to) => makeParentsBefore(() => copyFile(from, to))(to)