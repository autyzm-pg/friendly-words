export const ModeTypes = {
    learning: 0,
    test: 1
}
export const emptyDb = {
    idSeeds: {
        configs: 1000
    },
    tables: {
        configs: []
    },
    activeConfig: {
        id: undefined,
        mode: ModeTypes.learning
    }
}