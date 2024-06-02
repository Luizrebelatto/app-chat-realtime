import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useCallback,
} from "react";

import { collection, addDoc, orderBy, query, onSnapshot } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, database } from "../../config/firebase";
import { Title, Wrapper } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Talks() {
    const insets = useSafeAreaInsets()

    const [messages, setMessages] = useState([]);

    useLayoutEffect(() => {
        const collectionRef = collection(database, 'conversations')
        const queryMessage = query(collectionRef, ref => ref.orderBy('createdAt', 'desc'))

        const unsubscribe =  onSnapshot(queryMessage, snapshot => {
            console.log('snapshot', snapshot)
            setMessages(
                snapshot.docs.map(doc => ({
                    _id: doc.id,
                    createdAt: doc.data().createdAt,
                    text: doc.data().text,
                    user: doc.data().user
                }))
            )
        })

        return () => unsubscribe();
    },[])

    return (
        <Wrapper 
            style={{ paddingTop: insets.top, paddingLeft: 20 }}
            showsVerticalScrollIndicator={false}
        >
            <Title>Talks screens</Title>
        </Wrapper>
    )
}