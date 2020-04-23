import React from 'react';
import Grid from 'react-gridlist';
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
    key: item.aid,
    ...item
  };
}
const Data = [
  { type: 'bilibili', aid: '5457973', bvid: 'BV1Vs41117zh', cid: '8869398' },
  { type: 'bilibili', aid: '13840340', bvid: 'BV1nx41187tu', cid: '22620867' },
  { type: 'bilibili', aid: '12557406', bvid: 'BV1Gx411q7sR', cid: '20662172' },
  { type: 'bilibili', aid: '38061162', bvid: 'BV1zt411v7gH', cid: '66908529' },
  { type: 'netease', id: 170749, title: '许冠杰版本' },
  { type: 'netease', id: 28838557, title: '黄霑' },
  { type: 'netease', id: 144382, title: '任贤齐版本' }
];
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
            <NeteaseMusic key={rest.id} {...rest} />
          ) : (
            <BilibiliVideo key={rest.aid} {...rest} />
          );
        }}
      />
    </StyledWrapper>
  );
}
