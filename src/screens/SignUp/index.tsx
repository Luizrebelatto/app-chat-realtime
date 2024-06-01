import React, { useState } from "react";
import { Title, Wrapper } from "./styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase"
import { Alert, View } from 'react-native'

import { Button } from "../../components/Button";
import { ButtonNavigation } from "../../components/ButtonNavigation";
import { Input } from "../../components/Input"

export function SignUp({ navigation }){
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSignUpUser = () => {
        if(email !== "" && password !== ""){
            createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigation.navigate("signIn")
            })
            .catch((error) => {
                Alert.alert('Error Create User', error.message, [
                    {
                      text: 'Tentar Novamente',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                ]);
            })
        }
    }
     
    return (
        <Wrapper>
            <Title>Cadastre sua Conta</Title>
            <View style={{ alignItems: 'center' }}>
                <Input
                    type="user"
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={(text: string) => setEmail(text)}
                />
                <Input
                    type="lock"
                    placeholder="Digite sua senha"
                    value={password}
                    onChangeText={(text: string) => setPassword(text)}
                />
                <Button
                    title="Cadastrar"
                    onPress={handleSignUpUser}
                />
                <ButtonNavigation
                    description="Já tem conta?"
                    title="Entrar"
                    onPress={() => navigation.navigate('signIn')}
                />
            </View>
        </Wrapper>
    )
}