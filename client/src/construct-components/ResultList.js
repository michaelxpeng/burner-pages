import React from 'react';

const ResultList = props => (
  <ul>
    {props.results.map(result => (
      <li key={result.id}>
        <img
          alt={result.title}
          className="img-fluid"
          src={result.images.original.url}
        />
      </li>
    ))}
  </ul>
);

export default ResultList;
