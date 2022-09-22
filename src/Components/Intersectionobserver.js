import React, { useEffect, useState, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

const Playlist = React.lazy(() => import('./Playlist'));
const Videothumbnail = React.lazy(() => import('./Videothumbnail'));
const Mdpage = React.lazy(() => import('./Mdpage'));

// import Playlist from './Playlist';
// import Videothumbnail from './Videothumbnail';
// import Mdpage from './Mdpage';

function Intersectionobserver() {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '300px 0px',
  });

  const [newComp, setNewComp] = useState([]);

  const array = [
    <Playlist key={1} />,
    <Videothumbnail key={2} />,
    <Mdpage key={3} />,
  ];

  const FetchNextPage = () => {
    let number = 0;
    number = Math.floor(Math.random() * 3);
    setNewComp(prev => [...prev, array[number]]);
    return;
  };

  useEffect(() => {
    FetchNextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!inView) {
      return;
    }
    FetchNextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <Suspense fallback={<div>....로딩 중입니다....</div>}>
      <div inView={inView}>
        <div>{newComp}</div>
        <div ref={ref} />
      </div>
    </Suspense>
  );
}

export default Intersectionobserver;
