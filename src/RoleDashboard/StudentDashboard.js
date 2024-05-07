import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CssFiles/studentdashboard.css'; // Import the CSS file
import HeaderBar from '../Utilities/HeadBar'; // Import the HeaderBar component

// Sidebar Component
function Sidebar({ showSidebar, toggleSidebar, setShowInfo, handleLogout }) {
  return (
    <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
      <div className="buttons">
        <button onClick={() => setShowInfo(false)}>Home</button>
        <button onClick={() => setShowInfo(true)}>My Information</button>
        <button>Academics</button>
        <button>Enrollment</button>
        <button>Settings</button>
        <button onClick={handleLogout}>Logout</button> {/* Logout button */}
      </div>
    </div>
  );
}

// StudentDashboard Component
function StudentDashboard() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [editMode, setEditMode] = useState(false); // State to control edit mode
  const [studentProfile, setStudentProfile] = useState({
    name: 'John Doe',
    gradeLevel: 'Grade 10',
    studentId: '1234567890',
    contactNumber: '+63 912 345 6789',
    email: 'johndoe@example.com',
    address: '123, ABC Street, XYZ City, Philippines'
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Load student information from localStorage on component mount
    const storedStudentInfo = localStorage.getItem('studentInfo');
    if (storedStudentInfo) {
      setStudentProfile(JSON.parse(storedStudentInfo));
    }
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleLogout = () => {
    // Perform logout actions, e.g., clearing local storage, etc.
    navigate('/'); // Redirect to the login page
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudentProfile({ ...studentProfile, [name]: value });
  };

  const handleSave = () => {
    // Save the updated student profile to localStorage
    localStorage.setItem('studentInfo', JSON.stringify(studentProfile));
    setEditMode(false); // Exit edit mode after saving
  };

  const renderInfo = () => {
    return (
      <div>
        <h3>{editMode ? 'Edit Information' : 'My Information'}</h3>
        {editMode ? renderEditForm() : renderInfoDetails()}
      </div>
    );
  };

  const renderEditForm = () => {
    return (
      <div>
        {/* Input fields for editing */}
        {Object.keys(studentProfile).map((key) => (
          <div key={key}>
            <label>{key}: </label>
            <input type="text" name={key} value={studentProfile[key]} onChange={handleInputChange} />
          </div>
        ))}
        <button onClick={handleSave}>Save</button>
      </div>
    );
  };

  const renderInfoDetails = () => {
    return (
      <div>
        {/* Display student information */}
        {Object.keys(studentProfile).map((key) => (
          <p key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {studentProfile[key]}
          </p>
        ))}
        <button onClick={toggleEditMode}>Edit Information</button>
      </div>
    );
  };

  return (
    <div>
      <HeaderBar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <Sidebar
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
        setShowInfo={setShowInfo}
        handleLogout={handleLogout}
      />
      <div className="content">
        <h1>Welcome, {studentProfile.name}!</h1>
        <h2>Dashboard</h2>
        {showInfo && renderInfo()}
      </div>
    </div>
  );
}

export default StudentDashboard;
