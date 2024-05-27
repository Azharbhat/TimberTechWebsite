import React, { useState, useEffect } from 'react';
import './MillList.css'; // Import the CSS file
import { Link } from 'react-router-dom';

export default function MillList() {
  // Dummy data for mills
  const dummyMills = [
    { key: 1, millname: 'Mill 1', username: 'Owner 1' },
    { key: 2, millname: 'Mill 2', username: 'Owner 2' },
    { key: 3, millname: 'Mill 3', username: 'Owner 3' },
  ];

  const [mills, setMills] = useState(dummyMills);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMills, setFilteredMills] = useState([]);

  useEffect(() => {
    setFilteredMills(mills);
  }, [mills]);

  const filterMills = (query) => {
    const filtered = mills.filter((mill) => {
      return (
        mill.username.toLowerCase().includes(query.toLowerCase()) ||
        mill.millname.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredMills(filtered);
    setSearchQuery(query);
  };

  const MillItem = ({ mill }) => {
    return (
      <div className="millItem">
        <div className="millInfo">
          <p className="millName">{mill.millname}</p>
          <p className="ownerName">Owner: {mill.username}</p>
        </div>
        <Link to="/Join">
          <button className="joinButton">
            Join
          </button>
        </Link>
      </div>
    );
  };

  return (
    <div className="Joincontainer">
      <h1 className="title">All Mills</h1>
      <input
        className="searchInput"
        type="text"
        placeholder="Search by Owner or millname"
        onChange={(e) => filterMills(e.target.value)}
        value={searchQuery}
      />
      <div className="millList">
        {filteredMills.map((mill) => (
          <MillItem key={mill.key} mill={mill} />
        ))}
      </div>
    </div>
  );
}
