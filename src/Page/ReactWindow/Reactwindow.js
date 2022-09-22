import React from 'react';
import { VariableSizeList } from 'react-window';
import Videothumbnail from '../../Components/Videothumbnail';
// import InfiniteLoader from "react-window-infinite-loader";
import Playlist from '../../Components/Playlist';
import Mdpage from '../../Components/Mdpage';

const item = [
  <Playlist key={1} />,
  <Videothumbnail key={2} />,
  <Mdpage key={3} />,
];

const Row = ({ index }) => item[index];
const getItemSize = index => item[index];

function Reactwindow() {
  return (
    <VariableSizeList
      height={600}
      width={450}
      itemCount={item.length}
      itemSize={getItemSize}
    >
      {Row}
    </VariableSizeList>
  );
}

export default Reactwindow;
