import React from "react";
import { Wrapper, Title } from "./styles"
import { TouchableOpacity, Text } from "react-native"

interface Props {
    item: any
    router: any
}

export function TalkItem({ item, router }: Props ) {

    const openChatRoom = () => {
        router.push({pathName: '/ChatRoom', params: item})
    }
    return (
        <Wrapper>
            <TouchableOpacity style={{ width: "80%", backgroundColor: 'yellow', height: 40 }} onPress={openChatRoom}>
            <Text>Nome</Text>
            </TouchableOpacity>
        </Wrapper>
    )
}