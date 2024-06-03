import React, { useState } from "react";
import { Title, Wrapper } from "./styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../../config/firebase"
import { Alert, View } from 'react-native'

import { Button } from "../../components/Button";
import { ButtonNavigation } from "../../components/ButtonNavigation";
import { Input } from "../../components/Input"
import { setDoc, doc } from "firebase/firestore";
import { useAuth } from "../../context/authContext";


export function SignUp({ navigation }){
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [name, setName] = useState<string>("")

    const { createNewUser } = useAuth();

    const handleSignUpUser = async() => {
        let response = await createNewUser(email, password, name);
        if(response.sucess) {
            navigation.navigate("signIn")
            setEmail("")
            setPassword("")
            setName("")
        } else {
            Alert.alert('Error Create User', response.data, [
                {
                    text: 'Tentar Novamente',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
            ]);
        }
    }
     
    return (
        <Wrapper>
            <Title>Cadastre sua Conta</Title>
            <View style={{ alignItems: 'center' }}>
                <Input
                    type="account-circle"
                    placeholder="Digite seu nome"
                    value={name}
                    onChangeText={(text: string) => setName(text)}
                />

                <Input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={(text: string) => setEmail(text)}
                />
                <Input
                    type="lock-outline"
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