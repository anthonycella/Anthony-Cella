import React from "react";
import styled from "styled-components";

export default function Education() {
  return (
    <EducationComponent>
      Education
    </EducationComponent>
  )
}

const EducationComponent = styled.div`
  &: hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
    transition: background-color 0.65s, color 0.7s;
  }
  background-color: black;
  padding: 25px;
  border-radius: 25px;
  font-size: 3.5em;
  color: #fff;
`;