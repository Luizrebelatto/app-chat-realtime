import styled from "styled-components/native";

export const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.beige};
    flex: 1;
`;

export const Button = styled.TouchableOpacity`
    border-bottom-width: 2px;
    border-bottom-color: ${({ theme }) => theme.colors.navyBlue};
    border-bottom-style: solid;
`;

export const ButtonTitle = styled.Text`
    color: ${({ theme }) => theme.colors.navyBlue}
`;

export const Title = styled.Text``;