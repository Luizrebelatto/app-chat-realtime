import React from "react";
import { Title, Wrapper, Button, ButtonTitle } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useAuth } from "../../context/authContext";

export function Settings(){
    const insets = useSafeAreaInsets()

    const { logoutUser } = useAuth()

    const handlelogout = async () => {
        await logoutUser()
    }

    return (
        <Wrapper style={{ paddingTop: insets.top, paddingLeft: 20 }}>
            <Title>Settings Screen</Title>
            <Button onPress={handlelogout}>
                <ButtonTitle>Log out</ButtonTitle>
            </Button>
        </Wrapper>
    )
}