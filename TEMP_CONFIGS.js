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

export {TextUnderCardsTest, TTStest, CheckWordLearningTest, ManyRepetitionsTest}