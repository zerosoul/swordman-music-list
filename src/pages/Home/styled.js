import styled from 'styled-components';
const ImageBg = 'https://gitee.com/zyanggc/oss/raw/master/works/bg.wuxia.png';
const ImageWords = 'https://gitee.com/zyanggc/oss/raw/master/works/bg.words.png';
const ImageBgHe = 'https://gitee.com/zyanggc/oss/raw/master/works/bg.he.png';

const StyledWrapper = styled.section`
  min-height: 100vh;
  padding: 1rem 2rem;
  background-image: url(${ImageBg}), url(${ImageBgHe}), url(${ImageWords});
  background-repeat: no-repeat;
  background-position: left bottom, right 50%, 1rem top;
  background-size: 16rem, 10rem, 10rem;
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
    padding: 1rem 0 2rem 0;
    .item {
      width: 16rem;
      padding: 1rem 0.8rem 1.4rem 0.8rem;
      margin-bottom: 1rem;
    }
  }
`;

export default StyledWrapper;
