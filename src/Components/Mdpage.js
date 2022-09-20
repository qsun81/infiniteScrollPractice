import React from 'react';
import styled from 'styled-components';

function Mdpage() {
  return (
    <MdpageWrapper>
      <div>굿즈들을 사 보아요!!</div>
      <div>
        <Img src="/images/lostark.png" alt="goods" />
      </div>
    </MdpageWrapper>
  );
}

export default Mdpage;

const MdpageWrapper = styled.div`
  text-align: center;
  margin: 5px auto;
`;

const Img = styled.img`
  width: 300px;
  margin-top: 10px;
`;
