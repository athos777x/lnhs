import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './studentdashboard.css'; // Import the CSS file

function Sidebar({ showSidebar, toggleSidebar, showInfo, setShowInfo, handleLogout }) {
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

  return (
    <div>
      <HeaderBar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <Sidebar 
        showSidebar={showSidebar} 
        toggleSidebar={toggleSidebar} 
        showInfo={showInfo} 
        setShowInfo={setShowInfo} 
        handleLogout={handleLogout} 
      />
      <div className="content">
        <h1>Welcome, {studentProfile.name}!</h1>
        <h2>Dashboard</h2>
        {showInfo && (
          <div>
            <h3>{editMode ? 'Edit Information' : 'My Information'}</h3> {/* Change heading based on editMode */}
            {/* Conditionally render input fields if in edit mode */}
            {editMode ? (
              <div>
                <label>Name: </label>
                <input type="text" name="name" value={studentProfile.name} onChange={handleInputChange} /><br />
                <label>Grade Level: </label>
                <input type="text" name="gradeLevel" value={studentProfile.gradeLevel} onChange={handleInputChange} /><br />
                <label>LRN/Student ID: </label>
                <input type="text" name="studentId" value={studentProfile.studentId} onChange={handleInputChange} /><br />
                <label>Contact Number: </label>
                <input type="text" name="contactNumber" value={studentProfile.contactNumber} onChange={handleInputChange} /><br />
                <label>Email: </label>
                <input type="text" name="email" value={studentProfile.email} onChange={handleInputChange} /><br />
                <label>Address: </label>
                <input type="text" name="address" value={studentProfile.address} onChange={handleInputChange} /><br />
                <button onClick={handleSave}>Save</button> {/* Save button */}
              </div>
            ) : (
              <div>
                <p><strong>Name:</strong> {studentProfile.name}</p>
                <p><strong>Grade Level:</strong> {studentProfile.gradeLevel}</p>
                <p><strong>LRN/Student ID:</strong> {studentProfile.studentId}</p>
                <p><strong>Contact Number:</strong> {studentProfile.contactNumber}</p>
                <p><strong>Email:</strong> {studentProfile.email}</p>
                <p><strong>Address:</strong> {studentProfile.address}</p>
                <button onClick={toggleEditMode}>Edit Information</button> {/* Edit Information button */}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentDashboard;
