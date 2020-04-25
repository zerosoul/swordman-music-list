import React from "react";
import Data from "../../assets/data.json";
import Lyric from "../../components/Lyric";
import BilibiliVideo from "../../components/BilibiliVideo";
import NeteaseMusic from "../../components/NeteaseMusic";
import StyledWrapper from "./styled";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <StyledWrapper>
      <h1 className="header">《沧海一声笑》歌曲集合</h1>

      <section className="items">
        {Data.map((d) => {
          const { type, ...rest } = d;
          const id = rest.id || rest.aid;
          return (
            <div key={id} className="item">
              {type == "netease" ? (
                <NeteaseMusic {...rest} />
              ) : (
                <BilibiliVideo {...rest} />
              )}
            </div>
          );
        })}
      </section>
      <Lyric />
      <Footer />
    </StyledWrapper>
  );
}

{
  /* <Grid
  items={Data}
  getGridGap={getGridGap}
  getColumnCount={getColumnCount}
  getWindowMargin={getWindowMargin}
  getItemData={getItemData}
  renderItem={(item) => {
    const { type, ...rest } = item;
    return type == 'netease' ? (
      <div key={rest.id} className="item">
        <NeteaseMusic {...rest} />
      </div>
    ) : (
      <div key={rest.aid} className="item">
        <BilibiliVideo {...rest} />
      </div>
    );
  }}
/>; */
}
