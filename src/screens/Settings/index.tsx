import React from "react";
import { Title, Wrapper, Button, ButtonTitle } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useAuth } from "../../context/authContext";

import packageJson from "../../../package.json"

export function Settings(){
    const insets = useSafeAreaInsets()

    const { logoutUser } = useAuth()

    const handlelogout = async () => {
        await logoutUser()
    }

    return (
        <Wrapper style={{ paddingTop: insets.top, paddingLeft: 20 }}>
            <Button onPress={handlelogout}>
                <ButtonTitle>Sair</ButtonTitle>
            </Button>
            <Title>{`Versão ${packageJson.version}`}</Title>
        </Wrapper>
    )
}