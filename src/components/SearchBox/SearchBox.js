// import React from 'react'
// import './SearchBox.css';

// const SearchBox = ({onInputChange}) =>{
//     return (
//         <div className="search-container">
//         <input
//          onChange={(event) => {
//              onInputChange(event.target.value);
//              }}
//          placeholder="Type Keywords" 
//          className="search-input"/>
//         </div>
//     );
// }
// export default SearchBox;


import React from 'react';
import './SearchBox.css';

const SearchBox = ({ onInputChange }) => {
  const handleInputChange = (event) => {
    onInputChange(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        onChange={handleInputChange}
        placeholder="Type Keywords"
        className="search-input"
      />
    </div>
  );
};

export default SearchBox;
