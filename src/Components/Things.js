import React from 'react';

const Things = ({ things })=> {
  return (
    <ul>
      {
        things.map( thing => {
          return (
            <li key={ thing.id }>
              { thing.name }
            </li>
          );
        })
      }
    </ul>
  );
};

export default Things;

