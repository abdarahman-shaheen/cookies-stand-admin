// CreateForm.js
import React, { useState } from 'react';

const CreateForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    location: '',
    min: '',
    max: '',
    avg: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStand = {
      location: formData.location,
      min: formData.min,
      max: formData.max,
      avg: formData.avg,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
    };

    onCreate(newStand);

    setFormData({
      location: '',
      min: '',
      max: '',
      avg: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... your form input fields here ... */}
    </form>
  );
};

export default CreateForm;
