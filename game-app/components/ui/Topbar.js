import glamorous from 'glamorous-native';

const variables = {
  horizontalGutter: 50,
  verticalGutter: 10
};

export const PositionRight = glamorous.view({
    position: "absolute",
    right: variables.horizontalGutter,
    top: variables.verticalGutter / 2
});

export const TopbarContainer = glamorous.view({
  position: "relative",
  flexDirection: "row",
  alignSelf: "stretch",
  justifyContent: "center",
  paddingHorizontal: variables.horizontalGutter,
  paddingVertical: variables.verticalGutter,
  marginTop: variables.horizontalGutter / 2
});