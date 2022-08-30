import React from "react";
import styled from "styled-components";
import Title from "./components/title/title";
import Experience from "./components/experience/experience";

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
      <Experience />
    </Application>
  );
}

const Application = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 500px;
  background-color: #000;
`;
