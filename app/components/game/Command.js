import React from "react";
import _ from "lodash";
import {Header} from "../ui/Header";

export default Command = ({text, word}) =>
		<Header>{_.replace(text, '{slowo}', word)}</Header>

