import React from 'react';

const Navbar = ({ title }) => {
  return (
    <nav style={{ backgroundColor: '#282c34', padding: '10px', color: 'white', textAlign: 'center' }}>
      <h2>{title}</h2>
    </nav>
  );
};

export default Navbar;