//PrincipalSideBar.js

import React, { useState } from 'react';
import '../CssFiles/principaldashboard.css';

function PrincipalSidebar({ showSidebar, toggleSidebar, setShowInfo, handleLogout, handleShowStudents, handleShowHome, handleShowGrades, handleShowAttendance, handleShowEmployee, handleShowEnrollment, handleShowEnrolledStudents, handleShowSchoolYear, handleShowSection, handleShowSubjects }) {
  const [showRecordsSubMenu, setShowRecordsSubMenu] = useState(false);
  const [showEnrollmentSubMenu, setShowEnrollmentSubMenu] = useState(false);
  const [showSubjectsSubMenu, setShowSubjectsSubMenu] = useState(false);

  const toggleRecordsSubMenu = () => {
    setShowRecordsSubMenu(prevState => !prevState);
    setShowEnrollmentSubMenu(false);
    setShowSubjectsSubMenu(false);
  };

  const toggleEnrollmentSubMenu = () => {
    setShowEnrollmentSubMenu(prevState => !prevState);
    setShowRecordsSubMenu(false);
    setShowSubjectsSubMenu(false);
  };

  const toggleSubjectsSubMenu = () => {
    setShowSubjectsSubMenu(prevState => !prevState);
    setShowRecordsSubMenu(false);
    setShowEnrollmentSubMenu(false);
  };

  return (
    <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
      <div className="buttons">
        <button onClick={handleShowHome}>Home</button>
        <button onClick={handleShowStudents}>Students</button>
        <div className="menu-with-submenu">
          <button onClick={toggleRecordsSubMenu}>Student Academic Records</button>
          {showRecordsSubMenu && (
            <div className="submenu">
              <button onClick={handleShowGrades}>--Grades</button>
              <button onClick={handleShowAttendance}>--Attendance</button>
            </div>
          )}
        </div>
        <button onClick={handleShowEmployee}>Employee</button>
        <div className="menu-with-submenu">
          <button onClick={toggleEnrollmentSubMenu}>Enrollment</button>
          {showEnrollmentSubMenu && (
            <div className="submenu">
              <button onClick={handleShowSchoolYear}>--School Year</button>
              <button onClick={handleShowSection}>--Section</button>
              <button onClick={handleShowEnrolledStudents}>--Enrolled Students</button>
            </div>
          )}
        </div>
        <div className="menu-with-submenu">
          <button onClick={toggleSubjectsSubMenu}>Subjects</button> {/* Toggle Subjects submenu */}
          {showSubjectsSubMenu && (
            <div className="submenu">
              <button>Subs</button>
            </div>
          )}
        </div>
        <button>Generate Report</button>
        <button>Settings</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default PrincipalSidebar;
