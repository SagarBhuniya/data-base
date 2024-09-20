// src/components/DataTable.js
import React from 'react';

const DataTable = ({ data }) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.email}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="2">No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

const styles = {
  table: {
    margin: '20px auto',
    width: '50%',
    borderCollapse: 'collapse',
    textAlign: 'left'
  }
};

export default DataTable;
