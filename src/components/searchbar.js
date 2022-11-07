import React from "react";


function Searchbar(){

    return(
        <div class="input-group rounded">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <span class="input-group-text border-0 searchButton" id="search-addon">
                <i class="fas fa-search "></i>
            </span>
        </div>
    )
}

export default Searchbar;