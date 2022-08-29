import React from "react";
import styled from "styled-components";

import AutoTyper from "./autotyper";

import Search from "./search/search";

function AutoTyperIntro({ words }) {
  return (
    <AutoTyperIntroComponent>
      <AutoTyper words={words} />
    </AutoTyperIntroComponent>
  );
}

const AutoTyperIntroComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 36px;
  margin: 15px;
`;

// if (topic === 'Select a topic to begin') {
//   return (
//     <AutoTyperIntroComponent>
//       Learn how to
//       &nbsp;
//       <AutoTypeIntro setTopic={setTopic} topics={topics} />
//       &nbsp;
//       in...
//     </AutoTyperIntroComponent>
//   );
// }

// return (
//   <AutoTyperIntroComponent>
//     Learn how to
//     &nbsp;
//     <SelectTopic setTopic={setTopic} topics={topics} selectedTopic={topic} />
//     &nbsp;
//     <MagnifyingGlass />
//     &nbsp;
//     in...
//   </AutoTyperIntroComponent>
// );

export default AutoTyperIntro;
