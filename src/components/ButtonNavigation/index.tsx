import React from "react";
import { Wrapper, Button,ButtonTitle, Description } from "./styles";

interface IButton {
    title: string;
    description: string;
    onPress: () => void;
}

export function ButtonNavigation({ description, onPress, title }: IButton) {
    return (
        <Wrapper>
            <Description>{description}</Description>
            <Button activeOpacity={0.7} onPress={onPress}>
                <ButtonTitle>{title}</ButtonTitle>
            </Button>
        </Wrapper>
    )
}