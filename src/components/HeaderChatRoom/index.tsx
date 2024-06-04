import React, { useEffect } from "react";
import { Wrapper, Title } from "./styles"
import { TouchableOpacity, Text, View } from "react-native"

interface Props {
    user: any
    router: any
}

export function HeaderChatRoom({ user, router }: Props) {
    useEffect(()=> {
        console.log("Linha 3: ", user)
    },[])
    return (
        <Wrapper>
            <View style={{ backgroundColor: 'yellow', width: "100%", height: 40, flexDirection: "row" }}>
                <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: 'red' }}></TouchableOpacity>
                <Text>{user?.name}</Text>
            </View>
        </Wrapper>
    )
}