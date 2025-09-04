import React from 'react';

const Card = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-center my-5">No news available.</p>;
  }

  return (
    <div className="row g-4">
      {data.map((curItem, index) => (
        <div className="col-md-4" key={index}>
          <div className="card h-100 shadow-sm">
            {curItem.urlToImage ? (
              <img
                src={curItem.urlToImage}
                className="card-img-top"
                alt={curItem.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
            ) : (
              <div
                className="bg-secondary d-flex align-items-center justify-content-center text-white"
                style={{ height: '200px' }}
              >
                No Image Available
              </div>
            )}
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{curItem.title}</h5>
              <p className="card-text flex-grow-1">{curItem.description}</p>
              <a
                href={curItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-auto"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
