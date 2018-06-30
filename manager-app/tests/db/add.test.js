import {_addRecord} from "../../db/tables"

describe("addRecord ", () => {
    var readDb, writeDb, addRecord

    beforeEach(() => {
        readDb = jest.fn()
        writeDb = jest.fn()
        addRecord = _addRecord(readDb, writeDb)
    })

    it('invokes readDb', () => {
        readDb.mockImplementationOnce(() => Promise.resolve())

        addRecord()

        expect(readDb).toBeCalledWith()
    })

    it('invokes writeDb', async () => {
        readDb.mockImplementationOnce(() => Promise.resolve())

        await addRecord()

        expect(writeDb).toBeCalled()
    })

    it("increments table's id seed", async () => {
        const tableName = "some table name"
        const idSeed = 123
        const mockDb = {
            idSeeds: {
                [tableName]: idSeed
            }
        }
        readDb.mockImplementationOnce(() => Promise.resolve(mockDb))

        await addRecord(tableName)

        expect(writeDb.mock.calls[0][0].idSeeds[tableName]).toBe(idSeed + 1)
    })

    it("adds a record to table with next id", async () => {
        const tableName = "the table name"
        const idSeed = 123
        const record = {someField: "some value"}
        const mockDb = {
            idSeeds: {
                [tableName]: idSeed
            },
            tables: {
                [tableName]: [],
                someOtherTable: [{}, {}]
            }
        }

        const expectedTables = {
            [tableName]: [{...record, id: idSeed + 1}],
            someOtherTable: [{}, {}]
        }


        readDb.mockImplementationOnce(() => Promise.resolve(mockDb))

        await addRecord(tableName, record)

        expect(JSON.stringify(writeDb.mock.calls[0][0].tables)).toBe(JSON.stringify(expectedTables))
    })

    it("doesn't touch existing values", async () => {
        const tableName = "the table name"
        const idSeed = 123
        const record = {someField: "some value"}
        const existingValues = [{someField: "test", id: "test"}, {someField: "else"}]
        const mockDb = {
            idSeeds: {
                [tableName]: idSeed
            },
            tables: {
                [tableName]: existingValues,
                someOtherTable: [{}, {}]
            }
        }

        readDb.mockImplementationOnce(() => Promise.resolve(mockDb))

        await addRecord(tableName, record)

        expect(writeDb.mock.calls[0][0].tables[tableName]).toContain(existingValues[0])
        expect(writeDb.mock.calls[0][0].tables[tableName]).toContain(existingValues[1])
    })
})