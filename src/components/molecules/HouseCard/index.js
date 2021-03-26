import React from 'react';
import {CardTitle, CardDescription, CardHighLightText} from '../../atoms/'
import {CardContainer, CardImage, TextContainer, TextContainerLeft, TextContainerRight} from './styles';

export const HouseCard = ({imgSource}) => {
    return(
        <CardContainer>
            <CardImage source={{uri:imgSource}} />
            <TextContainer>
                <TextContainerLeft>
                    <CardTitle>Casa a venda</CardTitle>
                    <CardDescription>Rua Maria Liporine, 7859, centro Morro Agudo</CardDescription>
                </TextContainerLeft>
                <TextContainerRight>
                    <CardHighLightText>U$ 200,00</CardHighLightText>
                </TextContainerRight>
            </TextContainer>
        </CardContainer>
    );
}