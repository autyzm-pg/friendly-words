import * as R from "ramda"

const tablePath = tableName => R.lensPath(['tables', tableName])
const idSeedsPath = tableName => R.lensPath(['idSeeds', tableName])
const idEqual = id => R.whereEq({id})
const addToTable = (db, tableName, record) => R.compose(
    R.over(tablePath(tableName)),
    R.append
)(record)(db)

const removeFromTable = (db, tableName, id) => R.compose(
    R.over(tablePath(tableName)),
    R.filter,
    R.complement,
    idEqual
)(id)(db)

export const _readTable = readDb => tableName => readDb()
    .then(R.view(tablePath(tableName)))

export const _addRecord = (readDb, writeDb) => (tableName, record) => readDb()
    .then(R.over(idSeedsPath(tableName), R.add(1)))
    .then(db => [db, record])
    .then(([db, record]) => [db, {...record, id: db.idSeeds[tableName]}])
    .then(([db, record]) => addToTable(db, tableName, record))
    .then(writeDb)

export const _updateRecord = (readDb, writeDb) => (tableName, id, record) => readDb()
    .then(db => [db, db.tables[tableName].find(idEqual(id))])
    .then(([db, oldRecord]) => {
        if (!oldRecord) {
            throw "ID_NOT_FOUND"
        }
        return [db, oldRecord]
    })
    .then(([db, oldRecord]) => [removeFromTable(db, tableName, oldRecord.id), oldRecord])
    .then(([db, oldRecord]) => [db, {...record, id}])
    .then(([db, newRecord]) => addToTable(db, tableName, newRecord))
    .then(writeDb)

export const _deleteRecord = (readDb, writeDb) => (tableName, id) => readDb()
    .then(R.over(tablePath(tableName), R.filter(record => record.id !== id)))
    .then(writeDb)

export const _createTable = (readDb, writeDb) => (tableName) => readDb()
    .then(R.ifElse(
        R.pipe(R.prop('tables'), R.has(tableName), R.not),
        R.pipe(
            R.set(tablePath(tableName), []),
            R.set(idSeedsPath(tableName), 1000),
            writeDb
        ),
        writeDb
    ))