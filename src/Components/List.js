import React, { /*useEffect, useRef, useState,*/ Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
// import Playlist from './Playlist';
// import Videothumbnail from './Videothumbnail';
// import Mdpage from './Mdpage';

const Playlist = React.lazy(() => import('./Playlist'));
const Videothumbnail = React.lazy(() => import('./Videothumbnail'));
const Mdpage = React.lazy(() => import('./Mdpage'));

function List() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: '200px 0px',
  });

  return (
    <Suspense fallback={<div>....로딩 중입니다....</div>}>
      <div inView={inView}>
        <Videothumbnail ref={ref} />
        {console.log('first')}
        <Playlist ref={ref} />
        {console.log('second')}
        <Mdpage ref={ref} />
        {console.log('third')}
        <Videothumbnail ref={ref} />
        {console.log('fourth')}
        <Playlist ref={ref} />
        {console.log('fifth')}
        <Mdpage ref={ref} />
        {console.log('last')}
      </div>
    </Suspense>
  );
}
export default List;
