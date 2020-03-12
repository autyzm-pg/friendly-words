import React from "react";
import _ from "lodash";
import {Header} from "../ui/Header";
import {BORDERED_BUTTON_SIZE} from "../ui/borderedButton/BorderedButton";
import {moderateScale} from "../../services/scalign";
import {Word} from "../../../android/app/src/main/res/constantStrings";

const GUTTER = moderateScale(20);
const HEADER_SPACING = BORDERED_BUTTON_SIZE + GUTTER;

export default Command = ({text, word}) =>
	<Header marginHorizontal={HEADER_SPACING}
			textAlign="center">
		{_.replace(text, '{'+ Word +'}', word)}
	</Header>

