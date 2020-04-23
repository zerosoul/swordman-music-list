import React, { useState } from 'react';
import styled from 'styled-components';
const ItemWrapper = styled.div`
  position: relative;
  padding: 30% 45%;
  border: 2px solid #eee;
  box-shadow: 0 0 8px 0px #fff;
  transition: transform 1s;
  border-radius: 10px;
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
    z-index: 999;
  }
  .mask,
  .bilibili {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .mask {
    cursor: pointer;
    z-index: 996;
  }
  .bilibili {
    z-index: 994;
  }
`;
const ModalWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(2, 2, 2, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  .wrapper {
    position: relative;
    padding: 30% 45%;
    iframe {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
    .close {
      font-size: 0.8rem;
      cursor: pointer;
      position: absolute;
      bottom: -1.5rem;
      left: 50%;
      transform: translateX(-50%);
      border: 1px solid #fff;
      border-radius: 5px;
      padding: 3px 6px;
    }
  }
`;
export default function BilibiliVideo({ aid = '5457973', bvid = 'BV1Vs41117zh', cid = '8869398' }) {
  const [visibile, setVisibile] = useState(false);
  const toggleVisbile = () => {
    setVisibile((prev) => !prev);
  };
  return (
    <>
      <ItemWrapper>
        <iframe
          className="bilibili"
          src={`//player.bilibili.com/player.html?aid=${aid}&bvid=${bvid}&cid=${cid}&danmaku=0`}
          frameBorder="no"
          scrolling="no"
        ></iframe>
        <div className="mask" onClick={toggleVisbile}></div>
      </ItemWrapper>
      {visibile && (
        <ModalWrapper onClick={toggleVisbile}>
          <div className="wrapper">
            <iframe
              className="bilibili"
              src={`//player.bilibili.com/player.html?aid=${aid}&bvid=${bvid}&cid=${cid}&danmaku=0`}
              frameBorder="no"
              scrolling="no"
            ></iframe>
            <div onClick={toggleVisbile} className="close">
              关闭
            </div>
          </div>
        </ModalWrapper>
      )}
    </>
  );
}
