import React from "react";
import { Wrapper, Name, BackButton, WrapperUser, ContentHeader } from "./styles"
import { View } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import theme from "../../globals/theme";

interface IHeaderChatRoom {
    user: {
        name: string
        userId: string
    }
    router: any
}

export function HeaderChatRoom({ user, router }: IHeaderChatRoom) {
    return (
        <Wrapper>
            <ContentHeader>
                <BackButton>
                    <FontAwesome name="chevron-circle-left" size={36} color="black" />
                </BackButton>
                <WrapperUser>
                    <FontAwesome name="user-circle-o" size={24} color={theme.colors.black} />
                    <Name>{user?.name}</Name>
                </WrapperUser>
            </ContentHeader>
        </Wrapper>
    )
}