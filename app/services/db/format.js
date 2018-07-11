import images from "../../../TEMP_IMAGES";

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
    id: 999,
    mode: ModeTypes.learning
  }
}