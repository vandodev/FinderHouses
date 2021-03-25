import styled from 'styled-components/native';

export const IconButtonContainer = styled.TouchableOpacity`
    display: flex;
    width: ${({theme}) => theme.metrics.px(48)}px;
    height: ${({theme}) => theme.metrics.px(48)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${({theme}) => theme.metrics.px(6)}px;
    background-color: ${({theme,transparent}) =>
    transparent
      ? theme.colors.purpleTransparent
      : theme.colors.backgroundLight};
 
`;