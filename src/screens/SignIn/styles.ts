import styled from "styled-components/native";

export const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.beige};
    flex: 1;
    padding-left: 20px;
    padding-right: 20px;
`;

export const Title = styled.Text`
    margin-top: 200px;
    font-size: 30px;
    color: ${({ theme }) => theme.colors.navyBlue};
    font-weight: bold;
    padding-left: 30px;
`;