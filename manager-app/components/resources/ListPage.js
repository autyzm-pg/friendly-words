import React from "react"
import {Body, Button, Container, Content, Header, Icon, Left, Right, Title, View} from "native-base"
import {withStyle} from "../../libs/withStyle"
import {StyleSheet} from "react-native"

const scrollStyles = StyleSheet.create({
    scrollContainer: {
        flexDirection: "row",
        justifyContent: "center",
    }
})

const ContentContainer = withStyle({
    maxWidth: 800,
    marginTop: 20,
    flex: 1,
})(View)

export const ListPage = ({onBack, title, rightContent, children}) =>
    <Container>
        <Header>
            <Left>
                <Button transparent onPress={onBack}>
                    <Icon name='arrow-back'/>
                </Button>
            </Left>
            <Body>
            <Title>{title}</Title>
            </Body>
            <Right>
                {rightContent}
            </Right>
        </Header>

        <Content contentContainerStyle={scrollStyles.scrollContainer} keyboardShouldPersistTaps="handled">
            <ContentContainer>
                {children}
            </ContentContainer>
        </Content>
    </Container>

