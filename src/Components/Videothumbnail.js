import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Videothumbnail() {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    fetch('/data/mockVideoUrl.json')
      .then(res => res.json())
      .then(res => setVideo(res));
  }, []);

  return (
    <VideoWrapper>
      {videos.map(({ id, url }) => {
        return (
          <div key={id}>
            <iframe
              width="300"
              height="200"
              src={url}
              frameBorder="0"
              title="Embedded youtube"
            />
          </div>
        );
      })}
    </VideoWrapper>
  );
}

export default Videothumbnail;

const VideoWrapper = styled.div`
  text-align: center;
  width: 400px;
  margin: 0 auto;
  padding: 20px 0;
`;
