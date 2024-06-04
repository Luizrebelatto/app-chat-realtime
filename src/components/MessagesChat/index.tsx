import React, { useState } from "react";
import { Title, Wrapper } from "./styles";

import { ScrollView } from "react-native"
import { MessagesChatItem } from "../MessagesChatItem";

interface Props {
    messages: any
    currentUser: any
}

export function MessagesChat({ messages, currentUser }: Props){
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: 10 }}>
            {
                messages?.map((item, index) => {
                    return (
                        <MessagesChatItem message={item} key={index} currentUser={currentUser}/>
                    )
                })
            }
        </ScrollView>
    )
}