import styled from "styled-components/native";

export const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.beige};
    flex: 1;
`;

export const Title = styled.Text``;

export const Input = styled.TextInput`
    height: 40px;
    width: 85%;
    border: 1px solid ${({ theme }) => theme.colors.navyBlue};
    border-radius: 10px;
    margin-bottom: 15px;
    padding-left: 4px;
`;

export const SendButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    margin-left: 10px;
    border-radius: 10px;
    justify-content: center;
`;