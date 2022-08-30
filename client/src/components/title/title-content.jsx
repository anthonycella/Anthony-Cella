import React from 'react';
import styled from 'styled-components';

export default function TitleContent() {
  return (
    <TitleContentContainer>
      <TitleText>Anthony Cella</TitleText>
    </TitleContentContainer>
  );
}

const TitleContentContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleText = styled.div`
  color: white;
  font-size: 4em;
`;
