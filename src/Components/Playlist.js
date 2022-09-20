import React from 'react';
import styled from 'styled-components';

function Playlist() {
  return (
    <PlaylistWrapper>
      <div>셋리스트, 놓치지 말고 꼭 듣고 가자</div>
      <div>
        <p>-하루 끝</p>
        <p>-23</p>
        <p>-25</p>
        <p>-마이 부</p>
        <p>-가을 아침</p>
        <p>-비밀의 화원</p>
        <p>-금요일에 만나요</p>
        <p>-팔레트</p>
        <p>-삐삐</p>
        <p>-내 손을 잡아</p>
        <p>- 좋은 날</p>
        <p>-마시멜로</p>
        <p>-U & I</p>
        <p>- 빨간 구두</p>
        <p>- 미아</p>
        <p>- 블루밍</p>
      </div>
      <div>
        <div>바로 듣기</div>
        <IconWrapper>
          <Img src="/images/Itunes-music-app-icon.png" alt="apple" />
          <Img src="/images/melon.png" alt="melon" />
          <Img src="/images/spotify.jpg" alt="spotify" />
          <Img src="/images/youtube.png" alt="youtube" />
        </IconWrapper>
      </div>
    </PlaylistWrapper>
  );
}

export default Playlist;

const PlaylistWrapper = styled.div`
  width: 400px;
  text-align: center;
  border: 1px solid black;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
`;
