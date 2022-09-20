import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Playlist from './Components/Playlist';
import Videothumbnail from './Components/Videothumbnail';
import Mdpage from './Components/Mdpage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/vod" element={<Videothumbnail />} />
        <Route path="/md" element={<Mdpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
