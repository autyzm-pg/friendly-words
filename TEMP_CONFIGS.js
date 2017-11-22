import images from "./TEMP_IMAGES"

const CONFIG2 = {
	materials: [
		{
			name: "piłka",
			images: [images.pilka1, images.pilka2, images.pilka3]
		},
		{
			name: "kotek",
			images: [images.cat1, images.cat2]
		},
		{
			name: "piesek",
			images: [images.dog1, images.dog2, images.dog3]
		},
		{
			name: "lalka",
			images: [images.doll]
		}
	],

	hintType: ["fade"],
	picturesNumber: 3,
	isTextForPicture: false,
	isReadingCommands: true,
	showHintAfter: 10,
	commandText: "Pokaż gdzie jest {slowo}",
	numberOfRepetitions: 2,
	textRewards: ["Super", "Dobrze Ci idzie!", "Tak"],
	isReadingRewards: false,
};

let FrycekTestConfig = {
	materials: [
		{
			name: "but",
			images: [images.but1, images.but2, images.but3]
		},
		{
			name: "łycha",
			images: [images.lycha1, images.lycha2, images.lycha3]
		},
		{
			name: "miś",
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
	isReadingCommands: false,
	showHintAfter: undefined,
	commandText: "Gdzie jest {slowo}",
	numberOfRepetitions: 3,
	textRewards: ["Super", "Dobrze Ci idzie!", "Tak"],
	isReadingRewards: false,
};

let FrycekConfig = {
	materials: [
		{
			name: "tablet",
			images: [images.tablet1, images.tablet2, images.tablet3]
		},
		{
			name: "łóżko",
			images: [images.lozko1, images.lozko2, images.lozko3]
		},
		{
			name: "baja",
			images: [images.baja1, images.baja2, images.baja3]
		}
	],

	hintType: ["fade"],
	picturesNumber: 3,
	isTextForPicture: false,
	isReadingCommands: true,
	showHintAfter: 12,
	commandText: "Gdzie jest {slowo}",
	numberOfRepetitions: 3,
	textRewards: ["Super", "Dobrze Ci idzie!", "Tak"],
	isReadingRewards: false,
};

let KacperConfig = {
	materials: [
		{
			name: "miś",
			images: [images.mis2, images.mis1, images.mis3]
		},
		{
			name: "auto",
			images: [images.auto1, images.auto2, images.auto3]
		},
		{
			name: "kredka",
			images: [images.kredka3, images.kredka1, images.kredka2]
		}
	],

	hintType: ["fade"],
	picturesNumber: 3,
	isTextForPicture: false,
	isReadingCommands: true,
	showHintAfter: 12,
	commandText: "Gdzie jest {slowo}",
	numberOfRepetitions: 3,
	textRewards: ["Super", "Dobrze Ci idzie!", "Tak"],
	isReadingRewards: false,
};

let AdamConfig = {
	materials: [
		{
			name: "małpa",
			images: [images.malpa1, images.malpa2, images.malpa3]
		},
		{
			name: "słońce",
			images: [images.slonce3, images.slonce2, images.slonce1]
		},
		{
			name: "parasol",
			images: [images.parasol1, images.parasol2, images.parasol3]
		}
	],

	hintType: ["fade"],
	picturesNumber: 3,
	isTextForPicture: false,
	isReadingCommands: true,
	showHintAfter: 12,
	commandText: "Gdzie jest {slowo}",
	numberOfRepetitions: 3,
	textRewards: ["Super", "Dobrze Ci idzie!", "Tak"],
	isReadingRewards: false,
};

export {FrycekConfig, FrycekTestConfig, AdamConfig, KacperConfig}