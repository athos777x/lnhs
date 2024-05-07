import React from 'react';

function HeaderBar({ showSidebar, toggleSidebar }) {
  return (
    <div className="header">
      <h1>LNHS - MIS</h1>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {showSidebar ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>
    </div>
  );
}

export default HeaderBar;
