import React, { useState } from "react";
import { Title, Wrapper } from "./styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase"
import { Alert, View } from 'react-native'

import { Button } from "../../components/Button";
import { ButtonNavigation } from "../../components/ButtonNavigation";
import { Input } from "../../components/Input"
import { useAuth } from "../../context/authContext";

export function SignIn({ navigation }){
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const { loginUser } = useAuth();

    const handleSignInUser = async () => {
        if(email == ""  || password == ""){
            Alert.alert('Login', "Preencha corretamente os campos email e senha", [
                {
                  text: 'Tentar Novamente',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
            ]);
            return;
        }
        const response = await loginUser(email, password);
        if(!response.success){
            Alert.alert('SignIn Error', response.data, [
                {
                  text: 'Tentar Novamente',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
            ]);
        } else {
            navigation.navigate("appRoutes")
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
                    onPress={handleSignInUser}
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