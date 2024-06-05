import styled from "styled-components/native";

export const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.beige};
    flex: 1;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.navyBlue};
    width: 50px;
    height: 20px;
    border-radius: 10px;
`;

export const ButtonTitle = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    text-align: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.navyBlue};
    font-size: 16px;
    font-weight: bold;
    justify-content: flex-end;
    align-self: center;
`;