import React, { useState } from 'react';
import styled from 'styled-components';
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 1s;

  &.playing {
    transform: scale(1.2);
    z-index: 999;
    h2 {
      font-size: 1.2rem;
      opacity: 1;
    }
  }
  h2 {
    transition: all 1s;
    opacity: 0.6;
    font-size: 1rem;
    font-weight: 800;
    margin-top: 1rem;
    text-shadow: 0 0 4px black;
  }
`;

export default function NeteaseMusic({ id = 170749, title = '版本' }) {
  const [playing, setPlaying] = useState(false);
  const handlePlay = (evt) => {
    console.log({ evt });
    const audios = document.querySelectorAll('audio');
    [...audios].forEach((a) => {
      if (!a.isEqualNode(evt.target)) {
        a.pause();
      }
    });
    setPlaying(true);
  };
  const handlePause = () => {
    setPlaying(false);
  };
  return (
    <ItemWrapper className={playing ? 'playing' : ''}>
      <audio loop onPause={handlePause} onPlay={handlePlay} controls controlsList="nodownload">
        <source src={`http://music.163.com/song/media/outer/url?id=${id}.mp3`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <h2>{title}</h2>
    </ItemWrapper>
  );
}
