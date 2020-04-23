import React from 'react';
import styled from 'styled-components';
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 1s;

  &:hover {
    transform: scale(1.1);
    z-index: 999;
  }
  h2 {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`;

export default function NeteaseMusic({ id = 170749, title = '版本' }) {
  // const [visibile, setVisibile] = useState(false);
  // const toggleVisbile = () => {
  //   setVisibile((prev) => !prev);
  // };
  return (
    <ItemWrapper>
      <audio controls>
        <source src={`http://music.163.com/song/media/outer/url?id=${id}.mp3`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <h2>{title}</h2>
    </ItemWrapper>
  );
}
