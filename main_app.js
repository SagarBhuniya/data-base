import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import DataTable from './components/DataTable';

const App = () => {
  const [data, setData] = useState([]);

  const handleFormSubmit = (newEntry) => {
    setData((prevData) => [...prevData, newEntry]);
  };

  return (
    <div>
      <Navbar title="My React App" />
      <Form onSubmit={handleFormSubmit} />
      <DataTable data={data} />
    </div>
  );
};

export default App;

