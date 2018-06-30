// @flow
import {ConfigurationModel, WordModel} from "./model"
import {WizardSingleView, WizardStep, WizardView} from "../libs/confy/views/wizard/wizardView"
import {Column, ColumnView} from "../libs/confy/views/column/columnView"
import {Section, SectionView} from "../libs/confy/views/section/sectionView"
import {SingleView} from "../libs/confy/views/single/singleView"
import {ListView} from "../libs/confy/views/list/listView"

// const DetailedListView = notImplementedFunc
// const CustomTestView = notImplementedFunc

export const WordsWizardView = WizardSingleView(fields =>
    ListView([fields.images]),
    WordModel
)

export const ConfigurationWizardView = WizardView(fields => [
    WizardStep("Materiał", SingleView(fields.materials)),
    WizardStep("Sposób uczenia", SectionView([
        Section("Ustawienia kroku", [fields.commandText, fields.picturesNumber, fields.showPicturesLabels, fields.isReadingCommands]),
        Section("Ustawienia próby", [fields.numberOfRepetitions]),
        Section("Ustawienia podpowiedzi", [fields.hintType ,fields.showHintAfter])

    ])),
    WizardStep("Wzmocnienia", ColumnView([
        Column([
            fields.textRewards,
            fields.isReadingRewards
        ]),
        // No animation implemented
        // Column([
        //     fields.animationRewards
        // ])
    ])),
    WizardStep("Test", SingleView(fields.testConfig))
], ConfigurationModel)

// export const ConfigurationWizardView = WizardView(fields => [
//     WizardStep("Material", DetailedListView(fields.materials)),
//     WizardStep("Sposob Uczenia", SectionView([
//             Section("Ustawienia kroku", [
//                 fields.commandText,
//                 fields.picturesNumber,
//                 fields.isTextForPicture,
//                 fields.isReadingCommands
//             ]),
//             Section("Ustawienia proby", [
//                 fields.numberOfRepetitions
//             ]),
//             Section("Ustawienia podpowiedzi", [
//                 fields.hintType,
//                 fields.showHintAfter
//             ])
//         ])
//     ),
//     WizardStep("Wzmocnienia", ColumnView([
//         Column([
//             fields.textRewards,
//             fields.isReadingRewards
//         ]),
//         Column([
//             fields.animationRewards
//         ])
//     ])),
//     WizardStep("Test", CustomTestView([
//         fields.testConfig.fields.numberOfRepetitions,
//         fields.testConfig.fields.timeForAnswer
//     ]))
// ], ConfigurationModel)