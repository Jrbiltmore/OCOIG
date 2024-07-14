
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGrants } from '../redux/actions/grantActions';
import GrantList from '../components/GrantList';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Grants = () => {
  const dispatch = useDispatch();
  const grants = useSelector((state) => state.grants.grants);

  useEffect(() => {
    dispatch(getGrants());
  }, [dispatch]);

  const data = grants.map(grant => ({
    name: grant.title,
    amount: grant.amount,
    status: grant.status,
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
      <GrantList grants={grants} />
    </div>
  );
};

export default Grants;
