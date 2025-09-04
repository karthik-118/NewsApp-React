import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container text-center my-5">
      <div className="card shadow p-5">
        <h1 className="mb-4">Welcome to <span className="text-primary">Trendy News</span></h1>
        <p className="lead mb-5">
          Stay updated with the latest news from around the world. Explore trending topics, get
          breaking news, and customize your news feed.
        </p>

        <Link to="/login" className="btn btn-primary btn-lg">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
