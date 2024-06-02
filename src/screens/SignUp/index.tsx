import React, { useState } from "react";
import { Title, Wrapper } from "./styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../../config/firebase"
import { Alert, View } from 'react-native'

import { Button } from "../../components/Button";
import { ButtonNavigation } from "../../components/ButtonNavigation";
import { Input } from "../../components/Input"
import { setDoc, doc } from "firebase/firestore";

export function SignUp({ navigation }){
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [name, setName] = useState<string>("")

    const handleSignUpUser = async () => {
        try {
            if(email !== "" && password !== ""){
                const response = await createUserWithEmailAndPassword(auth, email, password);
                await setDoc(doc(database, 'users', response?.user?.uid), {
                    name,
                    userId: response?.user.uid
                })
                navigation.navigate("signIn")
                setEmail("")
                setPassword("")
                setName("")
                return { success: true, data: response?.user }
            }
        } catch (error) {
            Alert.alert('Error Create User', error.message, [
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