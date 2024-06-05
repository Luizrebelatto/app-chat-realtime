import React from "react";

import { ScrollView } from "react-native"
import { MessagesChatItem } from "../MessagesChatItem";
import { Timestamp } from "firebase/firestore";

interface IMessage {
    createdAt: Timestamp
    senderName: string;
    text: string;
    userId: string;
}

interface IMessagesChat {
    messages: IMessage[]
    currentUser: {
        _redirectEventId: string;
        apiKey: string
        appName: string
        createdAt: string
        displayName: string
        email: string
        emailVerified:boolean
        isAnonymous: boolean
        lastLoginAt: string
        phoneNumber: string
        photoURL: string
        providerData: string[][]
        stsTokenManager: {
            accessToken: string
            expirationTime: string
            refreshToken: string
        }
        tenantId: string
        uid: string
    }
}

export function MessagesChat({ messages, currentUser }: IMessagesChat){
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