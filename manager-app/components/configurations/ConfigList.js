import React from "react"
import {Button, Icon, List, ListItem, Right, Left, Body, Text} from 'native-base'
import {TouchableOpacity, View} from "react-native"
import SearchBar from "../lists/SearchBar"
import {ListLabelsContainer, ListLabel} from "../../libs/confy/components/ui/ListLabels";

const activeTextStyle = ({
    color: "#11a42f",
})

export const ConfigElem = ({item, active, onSetActive, children}) => (
    <ListItem>
        <Body>
        <TouchableOpacity onPress={() => onSetActive(item.id)}>
            <View style={{flex: 1}}>
                <Text style={active ? activeTextStyle : {}}>{item.name}</Text>
                {active && <Text style={{...activeTextStyle, fontStyle: 'italic'}}> ({active})</Text>}
            </View>
        </TouchableOpacity>
        </Body>
        <Right>
            {children}
        </Right>
    </ListItem>
)

export default ConfigList = ({children, onSearchChange, searchQuery}) => (
    <View>
        <SearchBar onSearchChange={onSearchChange} searchQuery={searchQuery}/>
        <List>
            <ListLabelsContainer>
                <Left><ListLabel text={"nazwa konfiguracji"}/></Left>
                <Right><ListLabel text={"akcje"}/></Right>
            </ListLabelsContainer>
            {children}
        </List>
    </View>
)