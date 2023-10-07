// ./app/Pages/Main.js
"use client"
// Main.js
import React, { useState } from 'react';
import CreateForm from './CreateForm';
import ReportTable from './ReportTable';
import Footer from './Footer'; // Import the Footer component

const Main = () => {
  const [formData, setFormData] = useState({
    location: '',
    min: '',
    max: '',
    avg: '',
  });

  let count = 0;
  const [cookieStands, setCookieStands] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
count++;
    const newStand = {
      location: formData.location,
      min: formData.min,
      max: formData.max,
      avg: formData.avg,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
    };

    setCookieStands([...cookieStands, newStand]);
    setFormData({
      location: '',
      min: '',
      max: '',
      avg: '',
    });
  };

  const handleCreate = (newStand) => {
    setCookieStands([...cookieStands, newStand]);
  
  };

  return (
    <div>
      <CreateForm onCreate={handleCreate} />
      <div style={{ backgroundColor: '#6fe6b7', color: 'black', padding: '20px', margin: '5%', border: '2px solid #15b981', borderRadius: '10px' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label style={{ marginBottom: '10px', textAlign: 'center', width: '100%' }}>
              Create Cookie Stand
            </label>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', width: '100%' }}>
              <label style={{ marginRight: '5px' }}>
                Location
              </label>
              <input
                type="text"
                name="location"
                style={{ width: '100%' }}
                value={formData.location}
                onChange={handleChange}
                placeholder={cookieStands.length > 0 ? cookieStands[cookieStands.length - 1].location : ''}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div style={{ flex: 1, marginRight: '10px', width: '75%' }}>
                <label>
                  Minimum Customer Per Hour
                  <input type="text" name="min" style={{ width: '100%' }} value={formData.min} onChange={handleChange}
                    placeholder={cookieStands.length > 0 ? cookieStands[cookieStands.length - 1].min : ''}
                  />
                </label>
              </div>
              <div style={{ flex: 1, marginRight: '10px', width: '75%' }}>
                <label>
                  Maximum Customer Per Hour
                  <input type="text" name="max" style={{ width: '100%' }} value={formData.max} onChange={handleChange}
                    placeholder={cookieStands.length > 0 ? cookieStands[cookieStands.length - 1].max : ''}
                  />
                </label>
              </div>
              <div style={{ flex: 1, width: '75%' }}>
                <label>
                  Average Cookie Per Sale
                  <input type="text" name="avg" style={{ width: '100%' }} value={formData.avg} onChange={handleChange}
                    placeholder={cookieStands.length > 0 ? cookieStands[cookieStands.length - 1].avg : ''}
                  />
                </label>
              </div>
            </div>

            <button type="submit" style={{ marginTop: '10px', backgroundColor: '#15b981', width: '100%', height: '50px', borderRadius: '5px' }}>
              Create
            </button>
          </div>
        </form>
      </div>
      

      <ReportTable
        hours={[
          '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
          '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
        ]}
        reports={cookieStands}
      /> 
            <Footer locationCount={cookieStands.length} />

         </div>
  );
};

export default Main;
