import React from "react";
import { Wrapper, Title, Button } from "./styles"
import { FontAwesome } from '@expo/vector-icons';
import theme from "../../globals/theme";

interface Props {
    item: any
    router: () => void;
}

export function TalkItem({ item, router }:Props) {
    return (
        <Wrapper>
            <Button onPress={router}>
                <FontAwesome name="user-circle" size={50} color={theme.colors.inactiveBlue} />
                <Title>{item.name}</Title>
            </Button>
        </Wrapper>
    )
}