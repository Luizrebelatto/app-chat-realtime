import React from "react";
import { TextInput, Wrapper } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import theme from "../../globals/theme";

interface ITextInput {
    placeholder: string;
    type: 'lock' | 'user';
    value: string;
    onChangeText: (text: string) => void
}

export function Input({ placeholder, type, value, onChangeText }: ITextInput) {
    return (
        <Wrapper>
            <AntDesign name={type} size={24} color={theme.colors.navyBlue} />
            <TextInput 
                placeholder={placeholder}
                keyboardType={type === 'lock' ? 'default' : 'email-address'}
                secureTextEntry={type === 'lock'}
                value={value}
                onChangeText={onChangeText}
                maxLength={30}
                autoCorrect={false}
                autoCapitalize="none"
            />
        </Wrapper>
    )
}