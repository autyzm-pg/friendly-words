import glamorous from "glamorous-native";
import colors from "../../../assets/colours";
import CapriolaText from "../CapriolaText";

export const Card = glamorous.view({
  backgroundColor: colors.white,
  borderRadius: 20,
  flex: 1,
  padding: 12,
  overflow: 'hidden'
});

export const DashedBorder = glamorous.view({
    padding: 12,
    borderRadius: 30,
    borderWidth: 4,
    borderStyle: "dashed",
  },
  ({noBorder = false}) => (
    {
      borderColor: noBorder ? 'transparent' : colors.tulipTree
    }),
  ({size = 100}) => (
    {
      width: size,
      height: size
    }
  )
);

export const LabelText = glamorous(CapriolaText)({
  margin: 8,
  textAlign: "center",
    color: colors.shark
});