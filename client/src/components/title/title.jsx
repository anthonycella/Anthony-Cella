import React from 'react';
import styled from 'styled-components';

import TitleContent from './title-content';
import AutoTyper from './autotyper/autotyper';

export default function Title() {
  const autoTyperWords = [
    'Software Engineer',
    'Problem Solving Enthusiast',
    'Challenge Collector',
    'Team Spirit Junkie',
  ]

  return (
    <TitleContainer>
      <TitleContent />
      <AutoTyper words={autoTyperWords} />
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.div`
  color: white;
  font-size: 4em;
`;
