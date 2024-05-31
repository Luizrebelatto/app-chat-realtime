import React, { useState } from "react";
import { Title, Wrapper, Input, Button, ButtonTitle } from "./styles";

export function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
     
    return (
        <Wrapper>
            <Title>SignIn Screen</Title>
            <Input
                placeholder="Digite seu Email"
                value={email}
                onChangeText={(text)=> setEmail(text)}
            />
            <Input
                placeholder="Digite a sua senha"
                value={password}
                onChangeText={(text)=> setPassword(text)}
            />

            <Button>
                <ButtonTitle>Logar</ButtonTitle>
            </Button>
        </Wrapper>
    )
}