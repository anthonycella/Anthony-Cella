import React from 'react';
import styled from 'styled-components';

export default function Title() {
  return (
    <TitleContainer>
      <TitleText>Anthony Cella</TitleText>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleText = styled.div`
  color: blue;
  font-size: 4em;
`;
