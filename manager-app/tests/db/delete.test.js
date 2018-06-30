import {_deleteRecord} from "../../db/tables"

describe("deleteRecord ", () => {
    var readDb, writeDb, deleteRecord

    beforeEach(() => {
        readDb = jest.fn()
        writeDb = jest.fn()
        deleteRecord = _deleteRecord(readDb, writeDb)
    })

    it('invokes readDb', () => {
        readDb.mockImplementationOnce(() => Promise.resolve())

        deleteRecord()

        expect(readDb).toBeCalledWith()
    })

    it('invokes writeDb', () => {
        const tableName = 'some table name'
        const mockDb = {
            tables: {
                [tableName]: []
            }
        }
        readDb.mockImplementationOnce(() => Promise.resolve(mockDb))

        deleteRecord(tableName, "some id")
            .then(() => expect(writeDb).toBeCalled())
    })
    it('invokes writeDb with same DB', async () => {
        const tableName = 'some table name'
        const mockDb = {
            tables: {
                [tableName]: [{id: "not important"}]
            }
        }
        readDb.mockImplementationOnce(() => Promise.resolve(mockDb))

        await deleteRecord(tableName, "some id")

        expect(writeDb).toBeCalledWith(mockDb)

    })

    it('Removes record with id', async () => {
        const tableName = 'some table name'
        const idToRemove ="some id"
        const mockDb = {
            tables: {
                [tableName]: [{id: idToRemove}]
            }
        }
        const expectedDb = {
            tables: {
                [tableName]: []
            }
        }

        readDb.mockImplementationOnce(() => Promise.resolve(mockDb))

        await deleteRecord(tableName, idToRemove)

        expect(writeDb).toBeCalledWith(expectedDb)

    })

    it('Leaves other record untouched', async () => {
        const tableName = 'some table name'
        const idToRemove ="some id"
        const mockDb = {
            tables: {
                [tableName]: [{id: "other id"}, {id: idToRemove}, {id: "some other id"}]
            }
        }
        const expectedDb = {
            tables: {
                [tableName]: [{id: "other id"}, {id: "some other id"}]
            }
        }

        readDb.mockImplementationOnce(() => Promise.resolve(mockDb))

        await deleteRecord(tableName, idToRemove)

        expect(writeDb).toBeCalledWith(expectedDb)

    })
})