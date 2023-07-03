import React, { useState } from 'react';
import axios from 'axios';

const CreatePlace = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const [formData, setFormData] = useState({
    placeName: '',
    description: '',
    location: '',
  });

  const [errors, setErrors] = useState({
    placeName: '',
    description: '',
    location: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Perform form validation
    const newErrors = {};
  
    if (formData.placeName.trim() === '') {
      newErrors.placeName = 'Place name is required';
    }
  
    if (formData.description.trim() === '') {
      newErrors.description = 'Description is required';
    }
  
    if (formData.location.trim() === '') {
      newErrors.location = 'Location is required';
    }
  
    // Update the errors state
    setErrors(newErrors);
  
    // If there are no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      // Send the form data to the server or perform further actions
      // ...
    }
  };
  

  return (
        <div>
          <h2>Create New Place</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Place Name:</label>
              <input
                type="text"
                value={formData.placeName}
                onChange={(e) => setFormData({ ...formData, placeName: e.target.value })}
              />
              {errors.placeName && <div className="error">{errors.placeName}</div>}
            </div>
      
            <div>
              <label>Description:</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              ></textarea>
              {errors.description && <div className="error">{errors.description}</div>}
            </div>
      
            <div>
              <label>Location:</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
              {errors.location && <div className="error">{errors.location}</div>}
            </div>
      
            <button type="submit">Create Place</button>
          </form>
        </div>
      );
};

export default CreatePlace;