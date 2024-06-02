import React from "react";
import { Title, Wrapper } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context"

export function Contacts(){
    const insets = useSafeAreaInsets()

    return (
        <Wrapper style={{ paddingTop: insets.top, paddingLeft: 20 }}>
            <Title>Contacts Screen</Title>
        </Wrapper>
    )
}