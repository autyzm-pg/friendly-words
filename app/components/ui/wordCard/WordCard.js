import React from "react";
import {Card, DashedBorder, LabelText} from "./WordCard.styles";
import {Image} from "glamorous-native";

export default WordCard = ({text, imageUrl, cardSize, noBorder}) =>
<DashedBorder size={cardSize} noBorder={noBorder}>
	<Card>
		<Image source={imageUrl} resizeMode={'contain'} flex={1} height={undefined} width={undefined} />
		{text && <LabelText>{text}</LabelText>}
	</Card>
</DashedBorder>;