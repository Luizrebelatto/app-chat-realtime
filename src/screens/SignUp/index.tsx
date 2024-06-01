import React, { useState } from "react";
import { Title, Wrapper, Input, Button, ButtonTitle, ButtonNavigation, ButtonNavigationText } from "./styles";
import { Alert } from 'react-native'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../config/firebase"

export function SignUp({ navigation }){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignUpUser = () => {
        if(email !== "" && password !== ""){
            createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigation.navigate("signIn")
                console.log("create user success")
            })
            .catch((error) => {
                Alert.alert('Error Create User', error.message, [
                    {
                      text: 'Tentar Novamente',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                ]); 
                console.log("error create user: ", error.message)
            })
        }
    }
     
    return (
        <Wrapper>
            <Title>SignUp Screen</Title>
            <Input
                placeholder="Digite seu Email"
                value={email}
                onChangeText={(text)=> setEmail(text.toLowerCase())}
                autoCorrect={false}
                autoCapitalize="none"
            />
            <Input
                placeholder="Digite a sua senha"
                value={password}
                onChangeText={(text)=> setPassword(text.toLowerCase())}
                autoCorrect={false}
                autoCapitalize="none"
            />

            <Button onPress={handleSignUpUser}>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>

            <ButtonNavigation onPress={() => navigation.navigate('signIn')}>
                <ButtonNavigationText>
                    ja tem conta? entre
                </ButtonNavigationText>
            </ButtonNavigation>

        </Wrapper>
    )
}