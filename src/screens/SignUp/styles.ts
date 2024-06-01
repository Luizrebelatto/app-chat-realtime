import styled from "styled-components/native";

export const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
`;

export const Title = styled.Text`
    text-align: center;
    margin-top: 80px;
`;

export const Input = styled.TextInput`
    width: 80%;
    height: 40px;
    border-radius: 10px;
    border: 1px solid black;
    margin-top: 20px;
    align-self: center;
`;

export const Button = styled.TouchableOpacity`
    width: 80%;
    height: 40px;
    background-color: aqua;
    align-self: center;
    margin-top: 40px;
    border-radius: 20px;
    justify-content: center;
`;

export const ButtonTitle = styled.Text`
    color: black;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
`;

export const ButtonNavigation = styled.TouchableOpacity`
    align-self: center;
    margin-top: 20px;
`;

export const ButtonNavigationText = styled.Text`
    color: black;
    font-size: 16px;
`;