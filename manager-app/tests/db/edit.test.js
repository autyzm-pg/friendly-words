import {_updateRecord} from "../../db/tables"

describe("updateRecord ", () => {
    var readDb, writeDb, updateRecord

    beforeEach(() => {
        readDb = jest.fn()
        writeDb = jest.fn()
        updateRecord = _updateRecord(readDb, writeDb)
    })

    it('invokes readDb', () => {
        readDb.mockImplementationOnce(() => Promise.resolve())

        updateRecord()

        expect(readDb).toBeCalledWith()
    })

    it('throws error whene no id found', async () => {
        expect.assertions(1)

        const tableName = "the table name"
        const id = "not to be found"
        const mockDb = {
            tables: {
                [tableName]: [{id: "Not the id"}]
            }
        }
        readDb.mockImplementationOnce(() => Promise.resolve(mockDb))

        try {
            await updateRecord(tableName, id, {})
        }
        catch (e) {
            expect(e).toBe("ID_NOT_FOUND")
        }

    })

    it('overrides record with id', async () => {
        expect.assertions(1)

        const tableName = "the table name"
        const id = "to be found"
        const otherRecord1 = {id: "otherid1", someField: "Test"}
        const otherRecord2 = {id: "otherid2", someField: "Test"}

        const newRecord = {id, someField: "this value should persist", someOtherField2: "totally new field"}

        const mockDb = {
            tables: {
                [tableName]: [
                    otherRecord1,
                    otherRecord2,
                    {id, someField: "should be overriden", someOtherField: "Should not persist"}
                ],
                otherTable: [
                    {id, field: "test"}
                ]
            }
        }

        readDb.mockImplementationOnce(() => Promise.resolve(mockDb))

        await updateRecord(tableName, id, newRecord)

        expect(writeDb.mock.calls[0][0].tables[tableName].find(record => record.id === id)).toEqual(newRecord)
    })

    it("doesn't touch other records", async () => {
        const tableName = "the table name"
        const id = "to be found"
        const otherRecord1 = {id: "otherid1", someField: "Test"}
        const otherRecord2 = {id: "otherid2", someField: "Test"}

        const newRecord = {id, someField: "this value should persist", someOtherField2: "totally new field"}

        const mockDb = {
            tables: {
                [tableName]: [
                    otherRecord1,
                    {id, someField: "should be overriden", someOtherField: "Should not persist"},
                    otherRecord2,
                ],
                otherTable: [
                    {id, field: "test"}
                ]
            }
        }

        readDb.mockImplementationOnce(() => Promise.resolve(mockDb))

        await updateRecord(tableName, id, newRecord)

        expect(writeDb.mock.calls[0][0].tables[tableName]).toContain(otherRecord1)
        expect(writeDb.mock.calls[0][0].tables[tableName]).toContain(otherRecord2)
    })

    it("doesn't touch other tables", async () => {
        expect.assertions(1)

        const tableName = "the table name"
        const id = "to be found"
        const otherRecord1 = {id: "otherid1", someField: "Test"}
        const otherRecord2 = {id: "otherid2", someField: "Test"}

        const newRecord = {id, someField: "this value should persist", someOtherField2: "totally new field"}

        const otherTable = [
            {id, field: "test"},
        ]
        const mockDb = {
            tables: {
                [tableName]: [
                    otherRecord1,
                    {id, someField: "should be overriden", someOtherField: "Should not persist"},
                    otherRecord2,
                ],
                otherTable
            }
        }

        readDb.mockImplementationOnce(() => Promise.resolve(mockDb))

        await updateRecord(tableName, id, newRecord)

        expect(writeDb.mock.calls[0][0].tables.otherTable).toBe(otherTable)
    })
})