import styled from 'styled-components';
import ImageBg from '../../assets/img/bg.wuxia.png';
import ImageBgHe from '../../assets/img/bg.he.png';
const StyledWrapper = styled.section`
  min-height: 100vh;
  padding: 1rem 2rem;
  background-image: url(${ImageBg}), url(${ImageBgHe});
  background-repeat: no-repeat, no-repeat;
  background-position: left bottom, right top;
  background-size: 16rem, 10rem;
  .header {
    color: #fcefe8;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 800;
    text-align: center;
  }
  .items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 1rem;
    border-bottom: 2px solid rgba(117, 135, 138, 0.1);
    border-top: 2px solid rgba(117, 135, 138, 0.1);
    .item {
      width: 16rem;
      padding: 1rem 0.8rem 1.4rem 0.8rem;
      margin-bottom: 1rem;
    }
  }
`;

export default StyledWrapper;
