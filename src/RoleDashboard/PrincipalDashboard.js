//PrincipalDashboard.js

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
  const [showEmployee, setShowEmployee] = useState(false);
  const [showEnrollmentButtons, setShowEnrollmentButtons] = useState(false);
  const [showSchoolYearOptions, setShowSchoolYearOptions] = useState(false);
  const [showAddNewSchoolYearForm, setShowAddNewSchoolYearForm] = useState(false);
  const [showSectionFilters, setShowSectionFilters] = useState(false);
  const [showSchoolYearFilter, setShowSchoolYearFilter] = useState(false);
  const [showGradeLevelFilter, setShowGradeLevelFilter] = useState(false);
  const [schoolYearFormData, setSchoolYearFormData] = useState({
    startYear: '',
    endYear: '',
  }); // Define schoolYearFormData and setSchoolYearFormData
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
    setShowEnrollmentButtons(false);
    setShowSchoolYearOptions(false);
    setShowAddNewSchoolYearForm(false);
    setShowSectionFilters(false); // Hide section filters when clicking another button
  };

  const handleShowGrades = () => {
    setShowInfo(false);
    setShowStudents(false);
    setShowGradesSearch(true);
    setShowAttendance(false);
    setShowEmployee(false);
    setShowEnrollmentButtons(false);
    setShowSchoolYearOptions(false);
    setShowAddNewSchoolYearForm(false);
    setShowSectionFilters(false);
  };

  const handleShowAttendance = () => {
    setShowInfo(false);
    setShowStudents(false);
    setShowGradesSearch(false);
    setShowAttendance(true);
    setShowEmployee(false);
    setShowEnrollmentButtons(false);
    setShowSchoolYearOptions(false);
    setShowAddNewSchoolYearForm(false);
    setShowSectionFilters(false);
  };

  const handleShowEmployee = () => {
    setShowInfo(false);
    setShowStudents(false);
    setShowGradesSearch(false);
    setShowAttendance(false);
    setShowEmployee(true);
    setShowEnrollmentButtons(false);
    setShowSchoolYearOptions(false);
    setShowAddNewSchoolYearForm(false);
    setShowSectionFilters(false);
  };

  const handleShowHome = () => {
    setShowStudents(false);
    setShowGradesSearch(false);
    setShowAttendance(false);
    setShowEmployee(false);
    setShowInfo(true);
    setShowEnrollmentButtons(false);
    setShowSchoolYearOptions(false);
    setShowAddNewSchoolYearForm(false);
    setShowSectionFilters(false);
  };

  const handleShowEnrollment = () => {
    setShowEnrollmentButtons(true);
    setShowInfo(false);
    setShowStudents(false);
    setShowGradesSearch(false);
    setShowAttendance(false);
    setShowEmployee(false);
    setShowSchoolYearOptions(false);
    setShowAddNewSchoolYearForm(false);
    setShowSectionFilters(false);
  };

  const handleShowSchoolYear = () => {
    setShowSchoolYearOptions(true); // Always show school year options
    setShowInfo(false);
    setShowStudents(false);
    setShowGradesSearch(false);
    setShowAttendance(false);
    setShowEmployee(false);
    setShowEnrollmentButtons(false);
    setShowAddNewSchoolYearForm(false);
    setShowSectionFilters(false);
  };

  const handleShowAddNewSchoolYearForm = () => {
    setShowAddNewSchoolYearForm(true);
    setShowInfo(false);
    setShowStudents(false);
    setShowGradesSearch(false);
    setShowAttendance(false);
    setShowEmployee(false);
    setShowEnrollmentButtons(false);
    setShowSchoolYearOptions(false);
    setShowSectionFilters(false);
  };

  const handleSaveSchoolYear = () => {
    console.log('Save school year:', schoolYearFormData);
    // Implement logic to save school year data
    setShowAddNewSchoolYearForm(false);
    setSchoolYearFormData({
      startYear: '',
      endYear: '',
    });
  };

  const handleCancelAddNewSchoolYear = () => {
    setShowAddNewSchoolYearForm(false);
    setSchoolYearFormData({
      startYear: '',
      endYear: '',
    });
  };

  const handleSearch = (searchQuery) => {
    console.log('Searching for:', searchQuery);
  };

  const handleFilter = (filterType, filterValue) => {
    console.log('Filtering:', filterType, 'with value:', filterValue);
  };

  const handleAddEmployee = () => {
    console.log('Add employee functionality goes here');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSchoolYearFormData({
      ...schoolYearFormData,
      [name]: value,
    });
  };

  const handleShowSection = () => {
    setShowSectionFilters(true); // Always show section filters
    setShowInfo(false);
    setShowStudents(false);
    setShowGradesSearch(false);
    setShowAttendance(false);
    setShowEmployee(false);
    setShowEnrollmentButtons(false);
    setShowSchoolYearOptions(false);
    setShowAddNewSchoolYearForm(false);
  };

  const handleToggleSchoolYearFilter = () => {
    setShowSchoolYearFilter(!showSchoolYearFilter);
  };

  const handleToggleGradeLevelFilter = () => {
    setShowGradeLevelFilter(!showGradeLevelFilter);
  };

  const handleCloseSectionFilters = () => {
    setShowSectionFilters(false);
    setShowSchoolYearFilter(false);
    setShowGradeLevelFilter(false);
  };

  const handleApplySectionFilters = () => {
    // Logic to apply section filters
  };

  return (
    <div>
      <HeaderBar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <PrincipalSidebar
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
        setShowInfo={setShowInfo}
        handleLogout={handleLogout}
        handleShowStudents={handleShowStudents}
        handleShowHome={handleShowHome}
        handleShowGrades={handleShowGrades}
        handleShowAttendance={handleShowAttendance}
        handleShowEmployee={handleShowEmployee}
        handleShowEnrollment={handleShowEnrollment}
        handleShowSchoolYear={handleShowSchoolYear}
        handleShowSection={handleShowSection}
      />
      <div className="content">
        {showInfo && (
          <div>
            <h1>Welcome, Principal!</h1>
            <h2>Dashboard</h2>
          </div>
        )}
        {showStudents && (
          <div>
            <h1>Search Student</h1>
            <SearchFilter
              handleSearch={handleSearch}
              handleFilter={handleFilter}
            />
          </div>
        )}
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
        {showEmployee && (
          <div>
            <h1>Employee Management</h1>
            <SearchFilter
              handleSearch={handleSearch}
              handleFilter={handleFilter}
              showSchoolYearFilter={true}
              showRoleFilter={true}
            />
            <button onClick={handleAddEmployee}>Add Employee</button>
          </div>
        )}
        {showEnrollmentButtons && (
          <div>
            <button onClick={handleShowSchoolYear}>School Year</button>
            <button onClick={handleShowSection}>Section</button>
            <button onClick={handleToggleGradeLevelFilter}>Enrolled Students</button>
          </div>
        )}
        {showSchoolYearOptions && (
          <div>
            <button onClick={handleShowAddNewSchoolYearForm}>Add New School Year</button>
            <select>
              <option>2021-2022</option>
              <option>2022-2023</option>
              <option>2023-2024</option>
            </select>
            <button>Edit</button>
          </div>
        )}
        {showAddNewSchoolYearForm && (
          <div>
            <h2>Add New School Year</h2>
            <label htmlFor="startYear">Start Year:</label>
            <input type="text" id="startYear" name="startYear" value={schoolYearFormData.startYear} onChange={handleInputChange} />
            <label htmlFor="endYear">End Year:</label>
            <input type="text" id="endYear" name="endYear" value={schoolYearFormData.endYear} onChange={handleInputChange} />
            <button onClick={handleSaveSchoolYear}>Save</button>
            <button onClick={handleCancelAddNewSchoolYear}>Cancel</button>
          </div>
        )}
        {showSectionFilters && (
          <div>
            <h1>Section - Search Section</h1>
            <SearchFilter
              handleSearch={handleSearch}
              handleFilter={handleFilter}
              handleApplyFilters={handleApplySectionFilters}
              showSchoolYearFilter={showSchoolYearFilter}
              showGradeLevelFilter={showGradeLevelFilter}
              showSectionFilter={true}
            />
            <button onClick={handleCloseSectionFilters}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PrincipalDashboard;
