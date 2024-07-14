
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Grants = () => {
  const [grants, setGrants] = useState([]);

  useEffect(() => {
    const fetchGrants = async () => {
      const response = await axios.get('/api/grants');
      setGrants(response.data);
    };
    fetchGrants();
  }, []);

  const data = grants.map(grant => ({
    name: grant.title,
    amount: grant.amount,
    status: grant.status
  }));

  return (
    <div className="grants-container">
      <h2>Grants</h2>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
        <Bar dataKey="status" fill="#82ca9d" />
      </BarChart>
      <ul>
        {grants.map(grant => (
          <li key={grant._id}>
            {grant.title} - {grant.status} - ${grant.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grants;
