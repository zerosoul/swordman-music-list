import styled from 'styled-components';
import Data from './assets/data.json';
import Lyric from './components/Lyric';
import BilibiliVideo from './components/BilibiliVideo';
import NeteaseMusic from './components/NeteaseMusic';
import Footer from './components/Footer';
const ImageBg = 'https://gitee.com/zyanggc/oss/raw/master/works/bg.wuxia.png';
const ImageWords = 'https://gitee.com/zyanggc/oss/raw/master/works/bg.words.png';
const ImageBgHe = 'https://gitee.com/zyanggc/oss/raw/master/works/bg.he.png';

const StyledWrapper = styled.section`
  min-height: 100vh;
  max-width: 1500px;
  margin: auto;
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

function App() {
  return (
    <StyledWrapper>
      <h1 className="header">《沧海一声笑》歌曲集合</h1>

      <section className="items">
        {Data.map((d) => {
          const { type, ...rest } = d;
          const id = rest.id || rest.aid;
          return (
            <div key={id} className="item">
              {type == 'netease' ? <NeteaseMusic {...rest} /> : <BilibiliVideo {...rest} />}
            </div>
          );
        })}
      </section>
      <Lyric />
      <Footer />
    </StyledWrapper>
  );
}

export default App;
