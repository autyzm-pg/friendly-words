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
    configs: [
      {
        id: 999,
        name: "some",
        config: {
          materials: [
            {
              word: {
                name: "ball"
              },
              images: [images.pilka1, images.pilka2, images.pilka3]
            },
            {
              word: {
                name: "cat"
              },
              images: [images.cat1, images.cat2]
            },
            {
              word: {
                name: "dog"
              },
              images: [images.dog1, images.dog2, images.dog3]
            },
            {
              word: {
                name: "doll"
              },
              images: [images.doll]
            }
          ],

          hintType: ["fade"],
          picturesNumber: 3,
          showPicturesLabels: false,
          isReadingCommands: true,
          showHintAfter: 10,
          commandText: "Where is {slowo}?",
          numberOfRepetitions: 2,
          textRewards: ["Good", "Keep going!", "Yes"],
          isReadingRewards: false,
        },
      }
    ]
  },
  activeConfig: {
    id: 999,
    mode: ModeTypes.learning
  }
}