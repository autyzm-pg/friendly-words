import React from "react"
import {Body, Left, List, ListItem, Right, View} from "native-base"
import {TouchableOpacity} from "react-native"
import {ListLabel, ListLabelsContainer} from "../../libs/confy/components/ui/ListLabels"

export const ResourceElem = ({item, onElemClick = () => null, children}) => (
    <ListItem>
        <Body>
        <TouchableOpacity onPress={onElemClick}>
            <View style={{flex: 1, marginLeft: 20}}>
                {item}
            </View>
        </TouchableOpacity>
        </Body>
        <Right>
            {children}
        </Right>
    </ListItem>
)
export const ResourceList = ({children, onSearchChange, searchQuery}) => (
    <View>
        <ListLabelsContainer>
            <Left><ListLabel text={"nazwa zasobu"}/></Left>
            <Right><ListLabel text={"akcje"}/></Right>
        </ListLabelsContainer>
        <List style={{marginBottom: 60}}>
            {children}
        </List>
    </View>
)