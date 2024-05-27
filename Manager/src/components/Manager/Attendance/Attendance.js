import React, { useState } from 'react';
import './Attendance.css';

const Attendance = () => {
  const [attendance, setAttendance] = useState([
    { name: 'shabir', status: '' },
    { name: 'Mushtaq', status: '' },
    { name: 'fayaz', status: '' },
  ]);

  const handleAttendance = (name, status) => {
    setAttendance(attendance.map(
      attendee => attendee.name === name ? { ...attendee, status } : attendee
    ));
  };

  return (
    <div className="Attendacecontainer">
      <h2 className="header">Attendance</h2>
      {attendance.map(attendee => (
        <div className="row" key={attendee.name}>
          <span className="name">{attendee.name}</span>
          <button
            className={`button ${attendee.status === 'A' ? 'active' : ''}`}
            onClick={() => handleAttendance(attendee.name, 'A')}
          >
            A
          </button>
          <button
            className={`button ${attendee.status === 'P' ? 'active' : ''}`}
            onClick={() => handleAttendance(attendee.name, 'P')}
          >
            P
          </button>
        </div>
      ))}
    </div>
  );
};

export default Attendance;
