import styled from "styled-components/native";

export const TextInput = styled.TextInput`
    width: 90%;
    height: 40px;
    padding-left: 4px;
`;

export const Wrapper = styled.View`
    width: 80%;
    flex-direction: row;
    margin-top: 10px;
    align-items: center;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.colors.navyBlue};
`;