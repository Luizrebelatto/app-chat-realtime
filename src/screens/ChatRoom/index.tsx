import React, { useEffect, useRef, useState } from "react";
import { Title, Wrapper } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useRoute } from "@react-navigation/native";
import { HeaderChatRoom } from "../../components/HeaderChatRoom";
import { MessagesChat } from "../../components/MessagesChat"

import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useAuth } from "../../context/authContext";
import { getRoomId } from "../../utils/common";
import { Timestamp, addDoc, collection, doc, onSnapshot, orderBy, query, setDoc } from "firebase/firestore";
import { database } from "../../config/firebase";

export function ChatRoom(){
    const insets = useSafeAreaInsets()
    const route = useRoute()
    const { user } = useAuth();
    const [messages, setMessages] = useState([])
    const textRef = useRef('');
    const inputRef = useRef(null)

    useEffect(() => {
        createNewRoom()

        let roomId = getRoomId(user?.uid, route.params?.userId)
        const docRef = doc(database, "chats", roomId)
        const messageRef = collection(docRef, "messages")
        const queryMessage = query(messageRef, orderBy('createdAt', 'asc'))

        let unsub = onSnapshot(queryMessage, (snapshot) => {
            let allMessages = snapshot.docs.map(doc => {
                return doc.data()
            })

            setMessages([...allMessages])
        })

        return unsub
    },[])


    const createNewRoom = async () => {
        console.log("Linha 45: ", route?.params)
        console.log("linha 27: ", user?.uid)
        let roomId = getRoomId(user?.uid, route.params?.userId)
        await setDoc(doc(database, 'chats', roomId), {
            roomId,
            createdAt: Timestamp.fromDate(new Date())
        })
    }

    const handleSendMessage = async() => {
        let message = textRef.current.trim()
        if(!message) return;

        try {
            let roomId = getRoomId(user?.uid, route.params?.userId)
            const docRef = doc(database, 'chats', roomId)
            const messagesRef = collection(docRef, "messages")
            textRef.current = ""

            if(inputRef) inputRef?.current?.clear()
            const newDoc = await addDoc(messagesRef, {
                userId: user?.uid,
                text: message,
                senderName: user?.email,
                createdAt: Timestamp.fromDate(new Date())
            })

            console.log('new message id: ', newDoc.id)
        } catch (error) {
            Alert.alert('Message', error.message)
        }
    }
    
    return (
        <Wrapper style={{ paddingTop: insets.top, paddingLeft: 20 }}>
            <HeaderChatRoom user={route.params} router={route}/>
            <MessagesChat messages={messages} currentUser={user}/>
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    ref={inputRef}
                    placeholder="Digite a mensagem"
                    style={{ height: 40, borderWidth: 1, borderColor: 'red', width: '70%' }}
                    onChangeText={(value)=> textRef.current = value}
                />
                <TouchableOpacity onPress={handleSendMessage} style={{ width: 40, height: 40, backgroundColor: 'pink' }}>
                    <Text>enviar</Text>
                </TouchableOpacity>
            </View>
        </Wrapper>
    )
}