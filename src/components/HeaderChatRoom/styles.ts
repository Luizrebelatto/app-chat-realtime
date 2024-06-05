import styled from "styled-components/native";

export const Title = styled.Text`
`;

export const Wrapper = styled.View`
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
`;

export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.black};
    font-size: 20px;
    font-weight: bold;
`;

export const BackButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    justify-content: center;
`;

export const WrapperUser = styled.View`
    align-items: center;
    justify-content: center;
    width: 75%;
`;

export const ContentHeader = styled.View`
    width: 100%;
    height: 40px;
    flex-direction: row;
`;