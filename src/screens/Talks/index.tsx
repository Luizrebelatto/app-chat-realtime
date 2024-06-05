import React, { useEffect, useState } from "react";

import { Wrapper } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "../../context/authContext";
import { ScrollView } from "react-native";
import { TalkItem } from "../../components/TalkItem";
import { getDocs, query, where } from "firebase/firestore";
import { usersRef } from "../../config/firebase";

export function Talks({ navigation }) {
    const insets = useSafeAreaInsets()

    const { user } = useAuth()

    const [users, setusers] = useState([])

    useEffect(() => {
        if(user?.uid){
            getUsers()
        }
    },[])

    const getUsers = async () => {

        const queryTalks = query(usersRef, where('userId', '!=', user?.uid))
        const querySnapshot = await getDocs(queryTalks)

        let data = []
        querySnapshot.forEach(doc => {
            data.push({...doc.data()})
        })

        setusers(data)
    }

    return (
        <Wrapper   
            style={{ paddingTop: insets.top }}
            showsVerticalScrollIndicator={false}
        >
            <ScrollView>
                {users?.map((item, index) => (
                    <TalkItem key={index} item={item} router={()=> navigation.navigate('chatRoom', item)}/>
                ))}
            </ScrollView>
        </Wrapper>
    )
}