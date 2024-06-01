import React, { useState } from "react";
import { Title, Wrapper } from "./styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase"
import { Alert, View } from 'react-native'

import { Button } from "../../components/Button";
import { ButtonNavigation } from "../../components/ButtonNavigation";
import { Input } from "../../components/Input"

export function SignIn({ navigation }){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignInuser = () => {
        if(email !== "" && password !== ""){
            signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigation.navigate("appRoutes")
                console.log("Login Success")
            })
            .catch((error) => {
                Alert.alert('Error Login User', error.message, [
                    {
                      text: 'Tentar Novamente',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                ]); 
                console.log("Error Login: ", error.message)
            })
        }
    }
     
    return (
        <Wrapper>
            <Title>Entre na sua Conta</Title>
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
                    title="Entrar"
                    onPress={handleSignInuser}
                />
                <ButtonNavigation
                    description="Não tem conta?"
                    title="Cadastre-se"
                    onPress={() => navigation.navigate('signUp')}
                />
            </View>
        </Wrapper>
    )
}