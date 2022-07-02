import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { navbarData } from '../utils/navbar';

export const Root = () => {
  return (
    <Routes>
      {navbarData.map(({ id, path, element }) => {
        return <Route key={id} path={path} element={element} />;
      })}
    </Routes>
  );
};

export default Root;
