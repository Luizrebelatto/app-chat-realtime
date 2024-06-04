import React, { useEffect } from "react";
import { Wrapper } from './styles' 
import { View, Text } from "react-native"
interface Props {
    message: any
    currentUser: any
}

export function MessagesChatItem({ message, currentUser }: Props){
    // useEffect(() => {
    //     console.log("message linai: ", message?.userId)
    //     console.log("currentUser linai: ", currentUser?.uid)
    // },[])
    // return(
    //     <Wrapper>

    //     </Wrapper>
    // )
    if(currentUser?.uid == message?.userId){
        return (
            <View style={{ flexDirection: "row", backgroundColor: 'pink', justifyContent: "flex-end", paddingRight: 10 }}>
                <View style={{ alignItems: "flex-end", alignSelf: "flex-end", backgroundColor: 'orange', marginBottom: 5 }}>
                    <Text>{message?.text}</Text>
                </View>
            </View>
        )
    } else {
        return (
            <View style={{ flexDirection: "row", backgroundColor: 'green', justifyContent: "flex-start", paddingRight: 10 }}>
                <View style={{ backgroundColor: 'orange', marginBottom: 5 }}>
                    <Text>{message?.text}</Text>
                </View>
            </View>
        )
    }
}