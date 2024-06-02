import React from "react";
import { TextInput, Wrapper } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import theme from "../../globals/theme";

interface ITextInput {
    placeholder: string;
    type: 'lock-outline' | 'account-circle' | 'email';
    value: string;
    onChangeText: (text: string) => void;
}

export function Input({ placeholder, type, value, onChangeText }: ITextInput) {
    return (
        <Wrapper>
            <MaterialIcons name={type} size={24} color={theme.colors.navyBlue} />
            <TextInput 
                placeholder={placeholder}
                keyboardType={type === 'lock-outline' ? 'default' : 'email-address'}
                secureTextEntry={type === 'lock-outline'}
                value={value}
                onChangeText={onChangeText}
                maxLength={30}
                autoCorrect={false}
                autoCapitalize="none"
            />
        </Wrapper>
    )
}