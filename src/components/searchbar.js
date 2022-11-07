import React from "react";


function Searchbar(){

    return(
        <div className="input-group rounded">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <span className="input-group-text border-0 searchButton" id="search-addon">
                <i className="fas fa-search "></i>
            </span>
        </div>
    )
}

export default Searchbar;