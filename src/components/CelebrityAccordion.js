// CelebrityAccordion.js

import React, { useState } from "react";

function CelebrityAccordion({ celebrity, onEdit, onDelete, calculateAge }) {
  const [expanded, setExpanded] = useState(false);
  const [editedCelebrity, setEditedCelebrity] = useState({ ...celebrity });
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleCancelClick = () => {
    setIsEditMode(false);
    setEditedCelebrity({ ...celebrity });
  };

  const handleSaveClick = () => {
    // Implement save functionality here
    setIsEditMode(false);
    // Update the celebrity details in the parent component (App.js)
    onEdit(editedCelebrity);
  };

//   const handleDeleteClick = () => {
//     // Implement delete functionality here
//     onDelete(celebrity.id);
//   };

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      // Implement delete functionality here
      onDelete(celebrity.id);
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCelebrity({
      ...editedCelebrity,
      [name]: value,
    });
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <span className="accordion-icon">{expanded ? "-" : "+"}</span>
        <h2>{`${celebrity.first} ${celebrity.last} (Age: ${calculateAge(
          celebrity.dob
        )})`}</h2>
      </div>
      <div className={`accordion-content ${expanded ? "expanded" : ""}`}>
        <label htmlFor="gender">Gender:</label>
        {isEditMode ? (
          <select
            id="gender"
            name="gender"
            value={editedCelebrity.gender}
            onChange={handleInputChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
            <option value="Rather not say">Rather not say</option>
            <option value="Other">Other</option>
          </select>
        ) : (
          <span>{celebrity.gender}</span>
        )}
        <br />
        <label htmlFor="country">Country:</label>
        {isEditMode ? (
          <input
            type="text"
            id="country"
            name="country"
            value={editedCelebrity.country}
            onChange={handleInputChange}
          />
        ) : (
          <span>{celebrity.country}</span>
        )}
        <br />
        <label htmlFor="description">Description:</label>
        {isEditMode ? (
          <textarea
            id="description"
            name="description"
            value={editedCelebrity.description}
            onChange={handleInputChange}
          />
        ) : (
          <span>{celebrity.description}</span>
        )}
        <br />
        {isEditMode ? (
          <>
            <button className="save-button" onClick={handleSaveClick}>
              Save
            </button>
            <button className="cancel-button" onClick={handleCancelClick}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className="edit-button" onClick={handleEditClick}>
              Edit
            </button>
            <button className="delete-button" onClick={handleDeleteClick}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CelebrityAccordion;
