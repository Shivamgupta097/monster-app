import React from 'react';
import "./SearchBox.scss";

const SearchBox = ({...rest}) => {
  return (
    <div>
        <input {...rest}/>
    </div>
  )
}

export default SearchBox