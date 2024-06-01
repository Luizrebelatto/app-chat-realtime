import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.navyBlue};
    width: 80%;
    height: 40px;
    border-radius: 25px;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 20px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    text-align: center;
    font-size: 20px;
`;