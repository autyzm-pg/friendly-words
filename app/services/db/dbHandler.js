import * as R from "ramda"
import {_addRecord, _createTable, _deleteRecord, _readTable, _updateRecord} from "./tables"
import Mutex from "./mutex"
import {readFileAsync, writeFileAsync} from "../file-system/file"

const readFile = fileName => readFileAsync(fileName)
const writeToFile = (fileName, data) => writeFileAsync(fileName, data)

const readDbFile = (fileName, defaultDb = {}) => () => readFile(fileName)
    .catch(R.always(JSON.stringify(defaultDb)))
    .then(configsStr => JSON.parse(configsStr))
const writeDbFile = fileName => newDb => writeToFile(fileName, JSON.stringify(newDb))
const readDbFileWithLock = (mutex, readDb) => () => mutex.lock().then(readDb)
const readDbFileSafe = (mutex, readDb) => () => mutex.lock().then(readDb).then(R.tap(mutex.unlock))
const writeDbFileWithLock = (mutex, writeDb) => (newDb) => writeDb(newDb).then(R.tap(mutex.unlock))
const modifyDbFile = (readDb, writeDb) => (path, f) => readDb()
    .then(R.over(R.lensPath(path), f))
    .then(writeDb)

const createAccessors = (fileName, defaultDb) => {
    const mutex = Mutex.create()

    const readDb = readDbFile(fileName, defaultDb)
    const writeDb = writeDbFile(fileName)

    const readDbWithLock = readDbFileWithLock(mutex, readDb)
    const writeDbWithLock = writeDbFileWithLock(mutex, writeDb)

    return {
        readDb,
        writeDb,
        readDbWithLock,
        writeDbWithLock,
        readDbSafe: readDbFileSafe(mutex, readDb),
        modifyDb: modifyDbFile(readDbWithLock, writeDbWithLock)
    }
}

const DatabasesRegistry = {}

export const getDatabase = (fileName, emptyDb = {}) => {
    if (DatabasesRegistry[fileName]) {
        return DatabasesRegistry[fileName]
    }

    const defaultDatabase = {
        idSeeds: {},
        tables: {}
    }
    const newEmptyDb = R.merge(defaultDatabase, emptyDb)

    const {
        readDbWithLock,
        writeDbWithLock,
        readDbSafe,
        modifyDb
    } = createAccessors(fileName, newEmptyDb)

    const addRecord = _addRecord(readDbWithLock, writeDbWithLock)
    const updateRecord = _updateRecord(readDbWithLock, writeDbWithLock)
    const deleteRecord = _deleteRecord(readDbWithLock, writeDbWithLock)
    const readTable = _readTable(readDbSafe)
    const createTable = _createTable(readDbWithLock, writeDbWithLock)

    const db = {
        modifyDb,
        readDbSafe,
        addRecord,
        updateRecord,
        deleteRecord,
        readTable,
        createTable
    }

    DatabasesRegistry[fileName] = db

    return DatabasesRegistry[fileName]
}