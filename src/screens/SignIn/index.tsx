import React, { useState } from "react";
import { Title, Wrapper, Input, Button, ButtonTitle, ButtonNavigation, ButtonNavigationText } from "./styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase"
import { Alert } from 'react-native'

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
            <Title>SignIn Screen</Title>
            <Input
                placeholder="Digite seu Email"
                value={email}
                onChangeText={(text)=> setEmail(text)}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
            />
            <Input
                placeholder="Digite a sua senha"
                value={password}
                onChangeText={(text)=> setPassword(text)}
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
            />

            <Button onPress={handleSignInuser}>
                <ButtonTitle>Logar</ButtonTitle>
            </Button>

            <ButtonNavigation onPress={() => navigation.navigate('signUp')}>
                <ButtonNavigationText>
                    Não tem conta? cadastre
                </ButtonNavigationText>
            </ButtonNavigation>
        </Wrapper>
    )
}