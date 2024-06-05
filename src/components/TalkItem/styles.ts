import styled from "styled-components/native";

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
    font-size: 20px;
    margin-left: 10px;
`;

export const Wrapper = styled.View`
    width: 100%;
    height: 40px;
    margin-bottom: 30px;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    height: 60px;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
`;