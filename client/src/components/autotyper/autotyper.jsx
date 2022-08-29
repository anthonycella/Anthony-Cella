/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import styled from 'styled-components';

import Blinker from './blinker';

function getBlankText() {
  let blankText = '';

  for (let i = 0; i < 25; i += 1) {
    blankText += ' ';
  }

  return blankText;
}

function flipBlinker(blinker) {
  if (blinker === '|') {
    return '';
  }

  return '|';
}

function getNewSettings(text, index, word, words, direction) {
  const newText = text.split('');
  let newInterval = 75;

  if (direction === 'forward') {
    newText[index] = word[index];
    index += 1;

    if (index === word.length) {
      newInterval = 1500;
      index = word.length - 1;
      direction = 'backward';
    }
  } else {
    newText[index] = '';
    newText[index + 1] = '';
    index -= 1;

    if (index === -1) {
      newInterval = 1500;
      index = 0;
      const currentwordIndex = words.indexOf(word);
      const nextwordIndex = (currentwordIndex + 1) % words.length;
      word = words[nextwordIndex];

      direction = 'forward';
    }
  }
  const newSetText = newText.join('');

  return [newSetText, index, word, direction, newInterval];
}

function autoType(text, index, word, words, direction, setText, interval) {
  setTimeout(() => {
    const newSettings = getNewSettings(text, index, word, words, direction);
    setText(newSettings);
  }, interval);
}

function AutoTyper({ words }) {
  const [[text, index, word, direction, interval], setText] = useState(['', 0, words[0], 'forward', 1500]);
  autoType(text, index, word, words, direction, setText, interval);
  return (
    <OverallComponent onClick={onClick} className="search-bar">
      <AutoTyperComponent className="search-bar">
        {text}
        <Blinker className="search-bar" />
      </AutoTyperComponent>
      <BarComponent className="search-bar" />
    </OverallComponent>
  );
}

const AutoTyperComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  white-space: pre;
  margin-top: 2px;
  height: 36px;
  font-size: 34px;
`;

const OverallComponent = styled.div`
  &:hover {
    cursor: pointer;
  }
  display: flex;
  flex-direction: column;
`;

const BarComponent = styled.div`
  height: 3px;
  width: 300px;
  background-color: black;
`;

export default AutoTyper;
