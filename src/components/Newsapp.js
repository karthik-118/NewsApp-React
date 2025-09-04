import React, { useState, useEffect } from 'react';
import Card from './Card';

const Newsapp = () => {
  const [search, setSearch] = useState('india');
  const [newsData, setNewsData] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY;

  const getData = async (query = search) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apikey=${API_KEY}`
      );
      const jsonData = await response.json();
      setNewsData(jsonData.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSearch(category);
    getData(category);
  };

  useEffect(() => {
    getData('india'); // Fetch default news on load
  }, []);

  return (
    <div className="container my-4">
      {/* Search Bar & Quick Buttons */}
      <nav className="bg-primary rounded-3 p-3 text-white mb-4 shadow">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div className="input-group" style={{ maxWidth: '350px' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search News"
              onChange={handleInput}
              value={search}
              aria-label="Search News"
            />
            <button className="btn btn-warning" onClick={() => getData()}>
              Search
            </button>
          </div>

          <div className="d-flex flex-wrap gap-2">
            {['India', 'World', 'Tech'].map((category) => (
              <button
                key={category}
                className="btn btn-light btn-sm px-3"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Categories Section */}
      <div className="mb-4 d-flex flex-wrap gap-2 justify-content-center">
        {['Sports', 'Politics', 'Entertainment', 'Health', 'Fitness'].map((category) => (
          <button
            key={category}
            className="btn btn-outline-primary rounded-pill px-4"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* News Cards */}
      <Card data={newsData} />
    </div>
  );
};

export default Newsapp;
