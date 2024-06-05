import styled from 'styled-components/native'

export const MessageWrapper = styled.View<{ isCurrentUser: boolean }>`
    flex-direction: row;
    justify-content: ${({ isCurrentUser }) => isCurrentUser ? 'flex-end' : 'flex-start'};
    padding-right: 10px;
`;

export const MessageText = styled.Text<{ isCurrentUser: boolean }>`
    color: ${({ theme, isCurrentUser }) => isCurrentUser ? theme.colors.beige : theme.colors.navyBlue};
    padding: 8px;
`;

export const Content = styled.View<{ isCurrentUser: boolean }>`
    background-color: ${({ theme, isCurrentUser }) => isCurrentUser ? theme.colors.navyBlue : theme.colors.inactiveBlue};
    margin-bottom: 5px;
    border-radius: 6px;
`;
