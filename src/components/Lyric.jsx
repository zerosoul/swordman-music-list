import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ImageNoiseBg from '../assets/img/bg.noise.png';
const ImageBg = 'https://gitee.com/zyanggc/oss/raw/master/works/bg.lyric.png';
const ImageHe = 'https://gitee.com/zyanggc/oss/raw/master/works/bg.he.png';

const AniFloat = keyframes`
  from{
    transform:translateY(0);
  }
  to{
    transform:translateY(15px);
  }

`;
const ModalWrapper = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(2, 2, 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  background-image: url(${ImageNoiseBg});
  background-repeat: repeat;
  .close {
    color: #000;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    border: none;
    padding: 0.4rem 0.6rem;
    border: 1px solid #555;
    border-radius: 5px;
    background: none;
    cursor: pointer;
    font-weight: 800;
    font-size: 1rem;
  }
  .pic {
    z-index: -1;
    position: absolute;

    animation: ${AniFloat} 8s ease-in-out infinite;
    animation-direction: alternate;
    &.xia {
      width: 15rem;
      left: 0;
      bottom: 0;
    }
    &.he {
      top: 0;
      right: 0;
      width: 10rem;
      animation-duration: 4s;
      animation-delay: 1.5s;
    }
  }
  article {
    margin-top: -2rem;
    line-height: 1.8;
    padding: 1rem 2rem;
    background: rgba(222, 222, 222, 0.6);
    > p {
      color: #222;
    }
    .title {
      color: #000;
      font-size: 1.6rem;
      font-weight: 800;
    }

    .author {
      font-size: 0.8rem;
      color: #aaa;
      margin-bottom: 0.6rem;
    }
    .content {
      font-size: 1rem;
    }
  }
`;
const StyledButton = styled.button`
  z-index: 999;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  border: 1px solid #222;
  padding: 0.4rem 0.6rem;
  border-radius: 5px;
  background: rgba(222, 222, 222);
  cursor: pointer;
  color: #000;
  font-weight: 800;
  font-size: 1rem;
`;
export default function Lyric() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };
  return visible ? (
    <ModalWrapper>
      <img src={ImageBg} alt="江湖侠客配图" className="pic xia" />
      <img src={ImageHe} alt="闲云野鹤" className="pic he" />
      <article>
        <h2 className="title">沧海一声笑</h2>
        <p className="author">词：黄霑 / 曲：黄霑</p>
        <p className="content">沧海笑 滔滔两岸潮</p>
        <p className="content">浮沉随浪记今朝</p>
        <p className="content">苍天笑 纷纷世上潮</p>
        <p className="content">谁负谁胜出天知晓</p>
        <p className="content">江山笑 烟雨遥</p>
        <p className="content">涛浪淘尽 红尘俗世知多少</p>
        <p className="content">清风笑 竟若寂寥</p>
        <p className="content">豪情还剩了一襟晚照</p>
        <p className="content">苍生笑 不再寂寥</p>
        <p className="content">豪情仍在痴痴笑笑</p>
      </article>
      <button className="close" onClick={toggleVisible}>
        关闭
      </button>
    </ModalWrapper>
  ) : (
    <StyledButton onClick={toggleVisible}>歌词</StyledButton>
  );
}
