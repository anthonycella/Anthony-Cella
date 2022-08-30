import React from "react";
import styled from "styled-components";

export default function Experience() {
  return (
    <ExperienceComponent>
      Experience
    </ExperienceComponent>
  )
}

const ExperienceComponent = styled.div`
  &: hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
    transition: background-color 0.5s, color 0.6s ease-in-out;
  }
  background-color: black;
  padding: 25px;
  border-radius: 25px;
  font-size: 4em;
  color: #fff;
`;