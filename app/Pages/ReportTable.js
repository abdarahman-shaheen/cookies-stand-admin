// ReportTable.js
import React from 'react';

const ReportTable = ({ hours, reports }) => {
  if (reports.length === 0) {
    return <h2>No Cookie Stands Available</h2>;
  }

  const getTotal = (hour) => {
    return reports.reduce((sum, stand) => sum + stand.hourly_sales[hour], 0);
  };

  const getDailyTotal = (stand) => {
    return stand.hourly_sales.reduce((dailySum, sales) => dailySum + sales, 0);
  };

  const getGrandTotal = () => {
    return reports.reduce((sum, stand) => sum + getDailyTotal(stand), 0);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '80%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Location</th>
            {hours.map((hour, index) => (
              <th key={index} style={tableHeaderStyle}>{hour}</th>
            ))}
            <th style={tableHeaderStyle}>Daily Total</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((stand, standIndex) => (
            <tr key={standIndex}>
              <td style={tableCellStyle}>{stand.location}</td>
              {stand.hourly_sales.map((sales, hourIndex) => (
                <td key={hourIndex} style={tableCellStyle}>{sales}</td>
              ))}
              <td style={tableCellStyle}>{getDailyTotal(stand)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td style={tableFooterStyle}>Total</td>
            {hours.map((hour, index) => (
              <td key={index} style={tableFooterStyle}>{getTotal(index)}</td>
            ))}
            <td style={tableFooterStyle}>{getGrandTotal()}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  background: '#15b981',
  color: 'white',
  padding: '10px',
};

const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};

const tableFooterStyle = {
  background: '#15b981',
  color: 'white',
  padding: '10px',
};

export default ReportTable;
