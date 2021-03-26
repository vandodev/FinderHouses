import React from 'react';
import styled from 'styled-components';
import { text, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import { HouseCard} from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;


const IMAGE_URL_MOCK =
  'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80';

const stories = storiesOf('HouseCard', module);
stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standart', () => {
  const imageSource = text('ImageSource', IMAGE_URL_MOCK);
  const title = text('Title', 'Casa ampla no centro');
  const description = text(
    'Description',
    'Rua Sete de Setembro, 1000 - São Paulo',
  );
  const price = number('Price', 200);

  return (
    <HouseCard
      imageSource={{imageSource}}
      title={title}
      description={description}
      price={price}
    />
    
  );
});