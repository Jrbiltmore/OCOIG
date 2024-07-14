
import React from 'react';
import PropTypes from 'prop-types';

const GrantList = ({ grants }) => {
  return (
    <ul className="grant-list">
      {grants.map(grant => (
        <li key={grant._id} className="grant-item">
          <h3>{grant.title}</h3>
          <p>Status: {grant.status}</p>
          <p>Amount: ${grant.amount}</p>
        </li>
      ))}
    </ul>
  );
};

GrantList.propTypes = {
  grants: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  })).isRequired,
};

export default GrantList;
