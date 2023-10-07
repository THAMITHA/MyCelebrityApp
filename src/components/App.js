// App.js

import React, { useState, useEffect } from 'react';
import CelebrityAccordion from './CelebrityAccordion';

function App() {
  const [celebrities, setCelebrities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data from celebrities.json and update the state
    fetch('celebrities.json')
      .then((response) => response.json())
      .then((data) => setCelebrities(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    return age;
  };

  const handleEdit = (celebrityToEdit) => {
    // Implement edit functionality here
  };

  const handleDelete = (celebrityId) => {
    // Implement delete functionality here
  };

  const filteredCelebrities = celebrities.filter((celebrity) =>
    `${celebrity.first} ${celebrity.last}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div id="celebrityList">
        {filteredCelebrities.map((celebrity) => (
          <CelebrityAccordion
            key={celebrity.id}
            celebrity={celebrity}
            onEdit={handleEdit}
            onDelete={handleDelete}
            calculateAge={calculateAge}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
