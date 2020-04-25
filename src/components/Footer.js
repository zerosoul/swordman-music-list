/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 1rem;
  padding: 1.5rem 0 0.5rem 0;
  color: #ccc;
  text-align: center;
  font-size: 0.8rem;
  border-top: 2px solid rgba(222, 222, 222, 0.3);
  .link {
    padding: 0 0.4rem;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <a
        className="link"
        target="_blank"
        href="https://github.com/zerosoul/swordman-music-list"
      >
        Github
      </a>
      & Created By
      <a className="link" target="_blank" href="//yangerxiao.com">
        Tristan
      </a>
      with ❤️
    </StyledFooter>
  );
}
