import images from "./TEMP_IMAGES"

const CONFIG2 = {
    materials: [
        {
            name: "ball",
            images: [images.pilka1, images.pilka2, images.pilka3]
        },
        {
            name: "cat",
            images: [images.cat1, images.cat2]
        },
        {
            name: "dog",
            images: [images.dog1, images.dog2, images.dog3]
        },
        {
            name: "doll",
            images: [images.doll]
        }
    ],

    hintType: ["fade"],
    picturesNumber: 3,
    isTextForPicture: false,
    isReadingCommands: true,
    showHintAfter: 10,
    commandText: "Where is {slowo}?",
    numberOfRepetitions: 2,
    textRewards: ["Good", "Keep going!", "Yes"],
    isReadingRewards: false,
};

let TTStest = {
    materials: [
        {
            name: "shoe",
            images: [images.but1, images.but2, images.but3]
        },
        {
            name: "spoon",
            images: [images.lycha1, images.lycha2, images.lycha3]
        },
        {
            name: "teddy bear",
            images: [images.mis1, images.mis2, images.mis3]
        },
        {
            name: "tablet",
            images: [images.tablet1, images.tablet2, images.tablet3]
        }
    ],

    hintType: ["fade"],
    picturesNumber: 4,
    isTextForPicture: false,
    isReadingCommands: true,
    showHintAfter: undefined,
    commandText: "Where is {slowo}",
    numberOfRepetitions: 3,
    textRewards: ["Good", "Super", "Keep going"],
    isReadingRewards: true,
};

let TextUnderCardsTest = {
    materials: [
        {
            name: "tablet",
            images: [images.tablet1, images.tablet2, images.tablet3]
        },
        {
            name: "bed",
            images: [images.lozko1, images.lozko2, images.lozko3]
        },
        {
            name: "book",
            images: [images.baja1, images.baja2, images.baja3]
        }
    ],

    hintType: ["fade"],
    picturesNumber: 3,
    isTextForPicture: true,
    isReadingCommands: false,
    showHintAfter: 12,
    commandText: "{slowo}",
    numberOfRepetitions: 3,
    textRewards: ["Good!"],
    isReadingRewards: false,
};

let ManyRepetitionsTest = {
    materials: [
        {
            name: "teddy bear",
            images: [images.mis2, images.mis1, images.mis3]
        },
        {
            name: "car",
            images: [images.auto1, images.auto2, images.auto3]
        },
        {
            name: "crayon",
            images: [images.kredka3, images.kredka1, images.kredka2]
        }
    ],

    hintType: ["fade"],
    picturesNumber: 2,
    isTextForPicture: false,
    isReadingCommands: true,
    showHintAfter: 3,
    commandText: "{slowo}",
    numberOfRepetitions: 10,
    textRewards: ["Good job!"],
    isReadingRewards: false,
};

let CheckWordLearningTest = {
    materials: [
        {
            name: "monkey",
            images: [images.malpa1, images.malpa2, images.malpa3]
        },
        {
            name: "sun",
            images: [images.slonce3, images.slonce2, images.slonce1]
        },
        {
            name: "umbrella",
            images: [images.parasol1, images.parasol2, images.parasol3]
        }
    ],

    hintType: ["fade"],
    picturesNumber: 3,
    isTextForPicture: false,
    isReadingCommands: true,
    showHintAfter: 3,
    commandText: "Where is {slowo}",
    numberOfRepetitions: 3,
    textRewards: ["Good"],
    isReadingRewards: true,
};

const defaultConfig = {
    config: {
        "materials": [
            {
                "word": {
                    "name": "Misiu",
                    "tags": "",
                    "images": [
                        {
                            "width": 600,
                            "height": 595,
                            "uri": "file:///storage/emulated/0/friendly-words-app/assets/b0c0d89b-4a86-4cbf-b649-f9aeb2d50ddd.jpg"
                        },
                        {
                            "width": 382,
                            "height": 500,
                            "uri": "file:///storage/emulated/0/friendly-words-app/assets/bec00a59-42d2-4a43-8fe9-4bdd2b64ceb9.jpg"
                        },
                        {
                            "width": 696,
                            "height": 700,
                            "uri": "file:///storage/emulated/0/friendly-words-app/assets/90082e2e-b652-4559-a3e6-64b897924258.jpg"
                        }
                    ],
                    "id": 1004
                },
                "isInLearningMode": true,
                "isInTestMode": true,
                "images": [
                    {
                        "uri": "file:///storage/emulated/0/friendly-words-app/assets/b0c0d89b-4a86-4cbf-b649-f9aeb2d50ddd.jpg"
                    },
                    {
                        "uri": "file:///storage/emulated/0/friendly-words-app/assets/bec00a59-42d2-4a43-8fe9-4bdd2b64ceb9.jpg"
                    },
                    {
                        "uri": "file:///storage/emulated/0/friendly-words-app/assets/90082e2e-b652-4559-a3e6-64b897924258.jpg"
                    }
                ]
            },
            {
                "word": {
                    "name": "Tablet",
                    "tags": "",
                    "images": [
                        {
                            "width": 438,
                            "height": 438,
                            "uri": "file:///storage/emulated/0/friendly-words-app/assets/344a9870-433a-425c-86bb-2d1a9b960d29.png"
                        },
                        {
                            "width": 1500,
                            "height": 1500,
                            "uri": "file:///storage/emulated/0/friendly-words-app/assets/a94773dd-f43d-4fe0-9343-a1a80d91145b.jpg"
                        }
                    ],
                    "id": 1005
                },
                "isInLearningMode": true,
                "isInTestMode": true,
                "images": [
                    {
                        "uri": "file:///storage/emulated/0/friendly-words-app/assets/344a9870-433a-425c-86bb-2d1a9b960d29.png"
                    },
                    {
                        "uri": "file:///storage/emulated/0/friendly-words-app/assets/a94773dd-f43d-4fe0-9343-a1a80d91145b.jpg"
                    }
                ]
            },
            {
                "word": {
                    "name": "But",
                    "tags": "",
                    "images": [
                        {
                            "width": 395,
                            "height": 236,
                            "uri": "file:///storage/emulated/0/friendly-words-app/assets/8d051bec-272a-4914-857e-8b4fa9868c3f.jpg"
                        },
                        {
                            "width": 381,
                            "height": 375,
                            "uri": "file:///storage/emulated/0/friendly-words-app/assets/79c83968-8e54-49fb-985c-7e57e18d893b.jpg"
                        },
                        {
                            "width": 264,
                            "height": 225,
                            "uri": "file:///storage/emulated/0/friendly-words-app/assets/d7ce71af-3af4-4587-911d-fbe674dcf666.jpg"
                        }
                    ],
                    "id": 1002
                },
                "isInLearningMode": true,
                "isInTestMode": true,
                "images": [
                    {
                        "uri": "file:///storage/emulated/0/friendly-words-app/assets/79c83968-8e54-49fb-985c-7e57e18d893b.jpg"
                    },
                    {
                        "uri": "file:///storage/emulated/0/friendly-words-app/assets/8d051bec-272a-4914-857e-8b4fa9868c3f.jpg"
                    },
                    {
                        "uri": "file:///storage/emulated/0/friendly-words-app/assets/d7ce71af-3af4-4587-911d-fbe674dcf666.jpg"
                    }
                ]
            }
        ],
        "hintType": [
            "Wyszarz"
        ],
        "commandText": "Pokaż gdzie jest {slowo}",
        "picturesNumber": 3,
        "showPicturesLabels": true,
        "isReadingCommands": false,
        "showHintAfter": 5,
        "numberOfRepetitions": 3,
        "textRewards": [
            "ŚWIETNIE",
            "Dobrze"
        ],
        "isReadingRewards": false,
        "animationRewards": [],
        "testConfig": {
            "numberOfRepetitions": 3,
            "timeForAnswer": 5
        }
    }
};

export {TextUnderCardsTest, TTStest, CheckWordLearningTest, ManyRepetitionsTest, defaultConfig}