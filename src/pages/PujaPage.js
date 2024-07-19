import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PujaPage = () => {
  const [pujas, setPujas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/pujas')
      .then(response => {
        setPujas(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the puja details!', error);
      });
  }, []);

  return (
    <div>
      <h1>Puja Details</h1>
      <ul>
        {pujas.map(puja => (
          <li key={puja.id}>{puja.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PujaPage;
