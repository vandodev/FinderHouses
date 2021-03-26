import React from 'react';
import {ScreenContainer, TopContainer, TitleContainer} from './styles';
import {Title, IconButton, Input, HouseCard} from '../../components';

export const HomeScreen = () => {
    return(
        <ScreenContainer>
            <TopContainer>
                <TitleContainer>
                  <Title>Encontre aqui seu imóvel</Title>  
                </TitleContainer>
              
              <IconButton iconName="filter"/>  
            </TopContainer>
            
            <Input label="Localozação" placeholder="Digite o endereço"/>

            <HouseCard imgSource="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />

            
        </ScreenContainer>
    );
}