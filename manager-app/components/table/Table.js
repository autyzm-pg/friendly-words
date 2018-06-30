import {styled} from "../../libs/styled"
import {View} from "native-base"
import {ScrollView} from "react-native"

const tableStyles = {
    table: {
        flexDirection: "column"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cell: {
        flex: 1,
        padding: 2,
        justifyContent: "center",
        alignItems: "center"
    }
}
export const Table = styled(ScrollView, tableStyles.table)
export const Row = styled(View, tableStyles.row)
export const Cell = styled(View, tableStyles.cell)