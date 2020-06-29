import React from 'react'
import './search-box.styles.css'

export const Search = (props) => {
    return ( 
        <div >
              <input
              className="search"
          type="search"
          name=""
          onChange={props.handleChange}
          id=""
          placeholder="Search RoboFighters"
        />
        </div>
     );
}
 
