import React, { useState } from "react";
import { Title, Wrapper } from "./styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase"
import { Alert, View } from 'react-native'

import { Button } from "../../components/Button";
import { ButtonNavigation } from "../../components/ButtonNavigation";
import { Input } from "../../components/Input"

export function SignIn({ navigation }){
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSignInuser = async () => {
        try {
            if(email !== "" && password !== ""){
                const response = await signInWithEmailAndPassword(auth, email, password);
                navigation.navigate("appRoutes")
                setEmail("")
                setPassword("")
                return { success: true, data: response?.user }
            }
        } catch (error) {
            Alert.alert('Error Login Use', error.message, [
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
            <Title>Entre na sua Conta</Title>
            <View style={{ alignItems: 'center' }}>
                <Input
                    type="account-circle"
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
                    title="Entrar"
                    onPress={handleSignInuser}
                />
                <ButtonNavigation
                    description="Não tem conta?"
                    title="Cadastrar"
                    onPress={() => navigation.navigate('signUp')}
                />
            </View>
        </Wrapper>
    )
}