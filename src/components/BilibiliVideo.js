import React, { useState } from 'react';
import styled from 'styled-components';
import ImagePlay from '../assets/img/play.png';
const ItemWrapper = styled.div`
  position: relative;
  padding: 30% 45%;
  border: 2px solid #d1d9e0;
  box-shadow: 0 0 8px 0px #75878a;
  transition: transform 1s;
  border-radius: 10px;
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
    z-index: 999;
    .title {
      font-size: 1.2rem;
      opacity: 0.6;
    }
  }
  .mask,
  .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .title {
    transition: all 1s;
    font-weight: 800;
    font-size: 1rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: #e3f9fd;
    padding: 1rem 0;
    background: linear-gradient(0deg, black, transparent);
    z-index: 997;
  }
  .mask {
    cursor: pointer;
    z-index: 996;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(51, 59, 79, 0.2);
    .play {
      width: 2.2rem;
    }
  }
  .cover {
    z-index: 994;
    width: 100%;
  }
`;
const ModalWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(2, 2, 2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  .wrapper {
    position: relative;
    padding: 30% 45%;

    .bilibili {
      margin: 0 5px;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border: 1px solid #fff;
      overflow: hidden;
    }
    .close {
      font-size: 0.8rem;
      cursor: pointer;
      position: absolute;
      bottom: -1.8rem;
      left: 50%;
      transform: translateX(-50%);
      border: 1px solid #fff;
      border-radius: 5px;
      padding: 3px 6px;
    }
  }
`;
export default function BilibiliVideo({
  aid = '5457973',
  bvid = 'BV1Vs41117zh',
  cid = '8869398',
  cover = 'http://i2.hdslb.com/bfs/archive/5b3856bdbb2029128216c6f17ac83fef9d9d0b46.jpg',
  title = '标题'
}) {
  const [visibile, setVisibile] = useState(false);
  const toggleVisbile = (evt) => {
    evt.stopPropagation();
    setVisibile((prev) => !prev);
  };
  return (
    <>
      <ItemWrapper>
        <img src={cover} alt="封面图" className="cover" />

        <h2 className="title">{title}</h2>
        <div className="mask" onClick={toggleVisbile}>
          <img src={ImagePlay} alt="play image" className="play" />
        </div>
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
