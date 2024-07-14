
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="home-container">
      <h1>Welcome to the Inspector General Office</h1>
      <p>This platform provides a comprehensive solution for managing grants and ensuring transparency.</p>
      {isAuthenticated ? (
        <Link to="/grants" className="btn btn-primary">View Grants</Link>
      ) : (
        <>
          <Link to="/register" className="btn btn-primary">Register</Link>
          <Link to="/login" className="btn btn-secondary">Login</Link>
        </>
      )}
    </div>
  );
};

export default Home;
