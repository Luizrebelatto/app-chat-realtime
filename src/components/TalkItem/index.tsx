import React from "react";
import { Wrapper, Title } from "./styles"
import { TouchableOpacity, Text } from "react-native"

interface Props {
    item: any
    router: () => void;
}

export function TalkItem({ item, router }:Props) {

    // const openChatRoom = () => {
    //     router()
    // }
    return (
        <Wrapper>
            <TouchableOpacity style={{ width: "80%", backgroundColor: 'yellow', height: 40 }} onPress={router}>
            <Text>{item.name}</Text>
            </TouchableOpacity>
        </Wrapper>
    )
}