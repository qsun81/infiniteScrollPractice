import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <button>Lazy-Loading and IntersectioObs</button>
      <button>
        <Link to="/reactwindow">react-window and components as list</Link>
      </button>
      <button>react-window and react.lazy</button>
      <button>React-virtualzied (onItemsRendered)</button>
    </>
  );
}

export default Main;
