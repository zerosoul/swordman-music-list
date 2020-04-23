import React from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.div`
  position: relative;
  padding: 30% 45%;
  .bilibili {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
`;
export default function BilibiliVideo({ aid = '5457973', bvid = 'BV1Vs41117zh', cid = '8869398' }) {
  return (
    <StyledWrapper>
      <iframe
        className="bilibili"
        src={`//player.bilibili.com/player.html?aid=${aid}&bvid=${bvid}&cid=${cid}&page=1`}
        frameBorder="no"
        scrolling="no"
      ></iframe>
    </StyledWrapper>
  );
}
