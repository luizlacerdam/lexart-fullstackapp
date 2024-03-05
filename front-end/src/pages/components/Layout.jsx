import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="d-flex flex-row layout">
      <Outlet />
    </div>
  );
}

export default Layout;
