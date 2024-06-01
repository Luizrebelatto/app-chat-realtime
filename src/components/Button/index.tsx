import React from "react";
import { Title, Wrapper } from "./styles";

interface IButton {
    title: string;
    onPress: () => void;
}

export function Button({ title, onPress } : IButton) {
    return (
        <Wrapper onPress={onPress} activeOpacity={0.7}>
            <Title>{title}</Title>
        </Wrapper>
    )
}