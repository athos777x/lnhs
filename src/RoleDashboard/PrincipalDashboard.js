import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CssFiles/principaldashboard.css';
import HeaderBar from '../Utilities/HeadBar';
import SearchFilter from '../Utilities/SearchFilter';
import PrincipalSidebar from '../Utilities/PrincipalSideBar';

function PrincipalDashboard() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [showStudents, setShowStudents] = useState(false);
  const [showGradesSearch, setShowGradesSearch] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);
  const [showEmployee, setShowEmployee] = useState(false); // State to control Employee view
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleShowStudents = () => {
    setShowInfo(false);
    setShowStudents(true);
    setShowGradesSearch(false);
    setShowAttendance(false);
    setShowEmployee(false);
  };

  const handleShowGrades = () => {
    setShowInfo(false);
    setShowStudents(false);
    setShowGradesSearch(true);
    setShowAttendance(false);
    setShowEmployee(false);
  };

  const handleShowAttendance = () => {
    setShowInfo(false);
    setShowStudents(false);
    setShowGradesSearch(false);
    setShowAttendance(true);
    setShowEmployee(false);
  };

  const handleShowEmployee = () => {
    setShowInfo(false);
    setShowStudents(false);
    setShowGradesSearch(false);
    setShowAttendance(false);
    setShowEmployee(true);
  };

  const handleShowHome = () => {
    setShowStudents(false);
    setShowGradesSearch(false);
    setShowAttendance(false);
    setShowEmployee(false);
    setShowInfo(true);
  };

  const handleSearch = (searchQuery) => {
    console.log('Searching for:', searchQuery);
  };

  const handleFilter = (filterOptions) => {
    console.log('Filtering with options:', filterOptions);
  };

  const handleAddEmployee = () => {
    console.log('Add employee functionality goes here');
    // You can add the functionality to add an employee here
  };

  return (
    <div>
      {/* HeaderBar component */}
      <HeaderBar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      {/* PrincipalSidebar component */}
      <PrincipalSidebar
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
        setShowInfo={setShowInfo}
        handleLogout={handleLogout}
        handleShowStudents={handleShowStudents}
        handleShowHome={handleShowHome}
        handleShowGrades={handleShowGrades}
        handleShowAttendance={handleShowAttendance}
        handleShowEmployee={handleShowEmployee} // Add handleShowEmployee function
      />
      <div className="content">
        {/* Display welcome message only if showInfo is true */}
        {showInfo && (
          <div>
            <h1>Welcome, Principal!</h1>
            <h2>Dashboard</h2>
          </div>
        )}
        {/* Display student search component if showStudents is true */}
        {showStudents && (
          <div>
            <h1>Search Student</h1>
            <SearchFilter
              handleSearch={handleSearch}
              handleFilter={handleFilter}
            />
          </div>
        )}
        {/* Display grades search component if showGradesSearch is true */}
        {showGradesSearch && (
          <div>
            <h1>Grades - Search Student</h1>
            <SearchFilter
              handleSearch={handleSearch}
              handleFilter={handleFilter}
              showSchoolYearFilter={true}
              showGradeLevelFilter={true}
              showSectionFilter={true}
            />
          </div>
        )}
        {/* Display attendance search component if showAttendance is true */}
        {showAttendance && (
          <div>
            <h1>Attendance - Search Student</h1>
            <SearchFilter
              handleSearch={handleSearch}
              handleFilter={handleFilter}
              showGradeLevelFilter={true}
              showSectionFilter={true}
            />
          </div>
        )}
        {/* Display Employee view if showEmployee is true */}
        {showEmployee && (
          <div>
            <h1>Employee Management</h1>
            <SearchFilter
              handleSearch={handleSearch}
              handleFilter={handleFilter}
              showSchoolYearFilter={true}
              showRoleFilter={true} // Add role filter
            />
            <button onClick={handleAddEmployee}>Add Employee</button> {/* Add button */}
          </div>
        )}
      </div>
    </div>
  );
}

export default PrincipalDashboard;
