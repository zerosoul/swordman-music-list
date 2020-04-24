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
  {
    type: 'bilibili',
    aid: '5457973',
    bvid: 'BV1Vs41117zh',
    cid: '8869398',
    title: '1990电影版：许冠杰'
  },
  {
    type: 'bilibili',
    aid: '13840340',
    bvid: 'BV1nx41187tu',
    cid: '22620867',
    title: '罗大佑/黄霑/徐克'
  },
  { type: 'bilibili', aid: '12557406', bvid: 'BV1Gx411q7sR', cid: '20662172', title: '黄霑现场版' },
  {
    type: 'bilibili',
    aid: '87955593',
    bvid: 'BV12741147x9',
    cid: '150270983',
    title: '《我是歌手》GAI'
  },
  { type: 'netease', id: 170749, title: '许冠杰' },
  { type: 'netease', id: 28838557, title: '罗大佑/黄霑/徐克' },
  { type: 'netease', id: 28838557, title: '黄霑' },
  { type: 'netease', id: 144382, title: '任贤齐' },
  { type: 'netease', id: 369815, title: '女子十二乐坊' },
  { type: 'netease', id: 1411532260, title: '肖战' },
  { type: 'netease', id: 30031035, title: '胡伟立（琴箫合奏）' },
  { type: 'netease', id: 1400936754, title: '李少清（古筝）' }
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
            <div className="item">
              <NeteaseMusic key={rest.id} {...rest} />
            </div>
          ) : (
            <div className="item">
              <BilibiliVideo key={rest.aid} {...rest} />
            </div>
          );
        }}
      />
    </StyledWrapper>
  );
}
