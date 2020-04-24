import React from 'react';
import Grid from 'react-gridlist';
import Data from '../../assets/data.json';
import Lyric from '../../components/Lyric';
import BilibiliVideo from '../../components/BilibiliVideo';
import NeteaseMusic from '../../components/NeteaseMusic';
import StyledWrapper from './styled';

function getGridGap(elementWidth, windowHeight) {
  if (elementWidth > 720 && windowHeight > 480) {
    return 10;
  } else {
    return 5;
  }
}

function getColumnCount(elementWidth) {
  return Math.floor(elementWidth / 300);
}

function getWindowMargin(windowHeight) {
  return Math.round(windowHeight * 1.5);
}

function getItemData(item) {
  return {
    key: item.aid || item.id,
    height: item.type == 'netease' ? 120 : 300,
    ...item
  };
}

export default function Home() {
  return (
    <StyledWrapper>
      <Grid
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
      />
      <Lyric />
    </StyledWrapper>
  );
}
