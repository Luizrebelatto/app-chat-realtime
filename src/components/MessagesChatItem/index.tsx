import React from "react";
import { MessageWrapper, MessageText, Content } from './styles' 
import { Timestamp } from "firebase/firestore";

interface IMessagesChatItem {
    message: {
        createdAt: Timestamp
        senderName: string;
        text: string;
        userId: string;
    }
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

export function MessagesChatItem({ message, currentUser }: IMessagesChatItem) {
    return (
        <MessageWrapper isCurrentUser={currentUser?.uid == message?.userId}>
            <Content isCurrentUser={currentUser?.uid == message?.userId}>
                <MessageText isCurrentUser={currentUser?.uid == message?.userId}>{message?.text}</MessageText>
            </Content>
        </MessageWrapper>
    )
}