import styled from "styled-components/native";

export const Wrapper = styled.View`
    flex-direction: row;
`;

export const Description = styled.Text`
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
    height: 20px;
    margin-left: 8px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.colors.navyBlue};
`;

export const ButtonTitle = styled.Text`
    color: ${({ theme }) => theme.colors.navyBlue};
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 4px;
`;