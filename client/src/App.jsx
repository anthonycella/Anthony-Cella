import React from "react";
import styled from "styled-components";
import Title from "./components/title";
import AutoTyper from "./components/autotyper/autotyper";

export default function App() {
  const autoTyperWords = [
    'Software Engineer',
    'Problem Solving Enthusiast',
    'Challenge Collector',
    'Team Spirit Junkie',
  ]
  return (
    <Application>
      <Title />
      <AutoTyper words={autoTyperWords} />
    </Application>
  );
}

const Application = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #000;
`;
