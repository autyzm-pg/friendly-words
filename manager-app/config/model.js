// @flow
import {DBModel, MainModel} from "../libs/confy/models"
import {OptionField} from "../libs/confy/fields/options/optionField"
import {TextField} from "../libs/confy/fields/text/textField"
import {BoolField} from "../libs/confy/fields/switch/boolField"
import {ImageMultiChooserField, MultiChooserField} from "../libs/confy/fields/multiOptions/multiOptionField"
import {ObjectField} from "../libs/confy/fields/object/ObjectField"
import * as R from "ramda"
import {ImagePickerField} from "../libs/confy/fields/imagePicker/ImagePickerField"
import {IntegerField} from "../libs/confy/fields/integer/IntegerField"
import {MaterialsArrayField, MaterialsArrayInput} from "../pages/confyViews/materials/MaterialsField"
import {ForeignField} from "../libs/confy/fields/foreign/foreignField"
import {SimpleCheckbox} from "../pages/confyViews/materials/SimpleCheckbox"
import {get, getChildProp, getSiblingProp} from "../libs/confy/fields/dynamic/traversing"
import TestObjectInput from "../pages/confyViews/testObjectPage/TestObjectInput"

export const WordModel = DBModel("words", {
    name: TextField("Slowo"),
    tags: TextField("Kategorie"),
    images: ImagePickerField("Obrazy")
})

export const ConfigurationModel = MainModel({
    materials: MaterialsArrayField({
        word: ForeignField("Wybrane słowo", WordModel),
        isInLearningMode: BoolField("W uczeniu", {component: SimpleCheckbox, def: true}),
        isInTestMode: BoolField("W teście", {component: SimpleCheckbox, def: true}),
        images: ImageMultiChooserField("Wybierz materiały wizualne", undefined, (obj, path) => ({
                options: R.pipe(
                    getSiblingProp("word"),
                    getChildProp("images"),
                    get
                )(path)(obj)
            })
        )
    }),
    hintType: MultiChooserField("Rodzaj podpowiedzi", {
        options: [
            "Wyszarz",
            "TAK",
            "Powieksz",
            "Brak"
        ],
        def: [
            "Wyszarz"
        ]
    }),
    commandText: OptionField("Rodzaj polecenia", {
        options: [
            "Pokaż gdzie jest {slowo}",
            "{slowo}",
        ]
    }),
    picturesNumber: IntegerField("Ilość obrazków", {min: 1, max: 6, def: 3}),
    showPicturesLabels: BoolField("Pokazuj podpisy pod obrazkami", {def: true}),
    isReadingCommands: BoolField("Czytanie poleceń"),
    showHintAfter: IntegerField("Czas do pokazania podpowiedzi", {min: 1, max: 20, def: 5, units: "s"}),
    numberOfRepetitions: IntegerField("Ilość powtórzeń", {min: 1, max: 20, def: 3}),
    textRewards: MultiChooserField("Wybierz pochwały słowne", {
        options: [
            "Super",
            "TAK",
            "ŚWIETNIE",
            "Dobrze"
        ],
        def: [
            "ŚWIETNIE",
            "Dobrze"
        ]
    }),
    isReadingRewards: BoolField("Odczytywanie głosowe wzmocnień"),
    animationRewards: ImageMultiChooserField("Wybierz animowane motywy nagród", {
        options: [
            {uri: "http://via.placeholder.com/350x350"},
            {uri: "http://via.placeholder.com/350x351"},
            {uri: "http://via.placeholder.com/351x350"}
        ]
    }),
    testConfig: ObjectField("Konfiguracja test", {
        numberOfRepetitions: IntegerField("Ilość powtórzeń", {min: 1, max: 20, def: 3}),
        timeForAnswer: IntegerField("Czas na odpowiedź", {min: 1, max: 10, def: 5, units: "s"})
    }, undefined, TestObjectInput)
})

//     someText: TextField("Some text"),
//     someOptionField: OptionField("Some option", {
//         options: [
//             "option1",
//             "option2"
//         ]
//     }),
//     materials: ArrayField("Materiały",
//         ObjectField("Some complex field", {
//             someOptions: ImageMultiChooserField("Wybierz obrazki dla słowa", {
//                 options: [],
//                 def: ["https://images-na.ssl-images-amazon.com/images/I/81ep8rBNqFL._SX466_.jpg", "https://i.ytimg.com/vi/-CKvt1KNU74/maxresdefault.jpg",
//                     "http://static.boredpanda.com/blog/wp-content/uploads/2017/02/goth-black-chicken-ayam-cemani-21.jpg"]
//             }),
//             someDynamicOptions: ImageMultiChooserField("Wybierz obrazki dynamic!", {}, (config, path) => ({
//                 options: getSibling(config, path, 'someOptions')
//             }))
//         }, {hidden: ['someOptions']})
//     ),
//     wordImages: ImageMultiChooserField("Wybierz obrazki dla słowa", {
//         options: [
//             "https://images-na.ssl-images-amazon.com/images/I/81ep8rBNqFL._SX466_.jpg",
//             "https://s-media-cache-ak0.pinimg.com/236x/61/ac/e2/61ace20ff0969cfa19e1082f047feec3--realistic-dolls-vintage-dolls.jpg",
//             "https://truimg.toysrus.com/product/images/09FF80A7.zoom.jpg?fit=inside|356:368",
//             "https://i.ytimg.com/vi/-CKvt1KNU74/maxresdefault.jpg",
//             "http://dreamatico.com/data_images/chicken/chicken-4.jpg",
//             "http://static.boredpanda.com/blog/wp-content/uploads/2017/02/goth-black-chicken-ayam-cemani-21.jpg"
//         ],
//         def: []
//     }),
//     commandText: TextField("Wybierz polecenie dla kroku"),
//     repetitionsNumber: TextField("Liczba prób dla słowa"),
//     picturesNumber: TextField("Wybierz ilość wyświetlanych obrazków"),
//     showPicturesLabels: BoolField("Pokazuj podpisy pod obrazkami", {def: true}),
//     readCommand: BoolField("Czytaj komende", {def: true})
// })

// export const ConfigurationModel = Model({
//     materials: ArrayField(ObjectField({
//         word: ForeignField(WordModel, Select({
//             name: TextField({readonly: true}),
//             images: MultiOptionField()
//         })),
//         isInLearningMode: BoolField(),
//         isInTestingMode: BoolField()
//     })),
//     hintType: OptionField([
//         "Wyszarz",
//         "TAK",
//         "Powieksz",
//         "Brak"
//     ]),
//     commandText: OptionField([
//         "Pokaz gdzie jest {slowo}",
//         "{slowo}",
//     ]),
//     picturesNumber: IntegerField(1, 6),
//     isTextForPicture: BoolField(),
//     isReadingCommands: BoolField(),
//     showHintAfter: IntegerField(1, 20),
//     numberOfRepetitions: IntegerField(1, 20),
//     textRewards: MultiOptionField([
//         "Super",
//         "TAK",
//         "SWIETNIE"
//     ]),
//     isReadingRewards: BoolField(),
//     animationRewards: MultiImageOptionField([
//         "image/path"
//     ]),
//     testConfig: ObjectField({
//         numberOfRepetitions: IntegerField(1, 20),
//         timeForAnswer: IntegerField(1, 10)
//     })
// })

// const LinesConfigurationModel = Model({
//     materials: ArrayField(ObjectField({
//         shape: OptionField([
//             'Linia prosta',
//             'Linia ukosna',
//             'Kolo'
//         ]),
//         shapeColor: MultiColorField(colors),
//         trailColor: MultiColorField(colors),
//         size: MultiSizeField(sizes)
//     })),
//     materialRepets: IntegerField(1, 20),
//     isStartingPoint: BoolField(),
//     textRewards: MultiOptionField([
//         "Super",
//         "TAK",
//         "SWIETNIE"
//     ]),
//     isReadingRewards: BoolField(),
//     animationRewards: MultiImageOptionField([
//         "image/path"
//     ]),
//     testMaterialRepeats: IntegerField(1,20)
// })