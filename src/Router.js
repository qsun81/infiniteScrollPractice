import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Playlist from './Components/Playlist';
import Videothumbnail from './Components/Videothumbnail';
import Mdpage from './Components/Mdpage';
import Reactwindow from './Page/ReactWindow/Reactwindow';
import List from './Components/List';
import Intersectionobserver from './Components/Intersectionobserver';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/vod" element={<Videothumbnail />} />
        <Route path="/md" element={<Mdpage />} />
        <Route path="/reactwindow" element={<Reactwindow />} />
        <Route path="/list" element={<List />} />
        <Route path="/inter" element={<Intersectionobserver />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
