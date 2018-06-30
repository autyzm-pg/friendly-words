import React from "react"
import {withLink} from "../../../libs/confy/libs/withState"
import {Form, Input, Item, Text} from "native-base"
import {SaveButtons} from "../askFactory"

const textAskerStyles = {
    form: {
        width: 400,
    },
    question: {
        marginBottom: 20
    }
}
export const TextAsker = defaultText =>
    withLink("text", defaultText)(
        ({children, onConfirm, onCancel, positive, text, textChange}) => (
            <Form style={textAskerStyles.form}>
                <Text style={textAskerStyles.question}>{children}</Text>
                <Item regular>
                    <Input value={text} onChangeText={textChange}/>
                </Item>
                <SaveButtons onCancel={() => onCancel(text)} onConfirm={() => onConfirm(text)} positive={positive}/>
            </Form>
        )
    )