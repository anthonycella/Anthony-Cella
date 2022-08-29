import React from "react";
import styled from "styled-components";
import Title from "./components/title";

export default function App() {
  return (
    <Application>
      <Title />
    </Application>
  );
}

const Application = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
`;
