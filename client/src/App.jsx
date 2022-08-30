import React from "react";
import styled from "styled-components";

import Title from "./components/title/title";
import Experience from "./components/experience/experience";
import Education from "./components/education/education";
import Projects from "./components/projects/projects";

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
      <Projects />
      <Experience />
      <Education />
    </Application>
  );
}

const Application = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 750px;
  background-color: #000;
`;
