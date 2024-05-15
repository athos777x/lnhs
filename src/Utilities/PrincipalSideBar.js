import React, { useState } from 'react';
import '../CssFiles/principaldashboard.css';

// PrincipalSidebar Component
function PrincipalSidebar({ showSidebar, toggleSidebar, setShowInfo, handleLogout, handleShowStudents, handleShowHome, handleShowGrades, handleShowAttendance, handleShowEmployee }) {
  const [showSubMenu, setShowSubMenu] = useState(false); // State to control showing the sub-menu

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu); // Toggle the visibility of the sub-menu
  };

  return (
    <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
      <div className="buttons">
        <button onClick={handleShowHome}>Home</button>
        <button onClick={handleShowStudents}>Students</button>
        <div className="menu-with-submenu">
          <button onClick={toggleSubMenu}>Student Academic Records</button>
          {showSubMenu && (
            <div className="submenu">
              <button onClick={() => handleShowGrades()}>--Grades</button> {/* Modify to call handleShowGrades */}
              <button onClick={() => handleShowAttendance()}>--Attendance</button> {/* Add handler for Attendance */}
            </div>
          )}
        </div>
        <button onClick={handleShowEmployee}>Employee</button> {/* Add onClick handler for Employee */}
        <button>Enrollment</button>
        <button>Subjects</button>
        <button>Sections</button>
        <button>Generate Report</button>
        <button>Settings</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default PrincipalSidebar;
