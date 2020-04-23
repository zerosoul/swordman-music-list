import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 100vh;
  padding: 1rem 2rem;
  .bilibili {
    width: 100%;
    height: 100%;
    border: 1px solid #000;
    box-shadow: 0 0 8px 0px black;
    transition: transform 1s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default StyledWrapper;
