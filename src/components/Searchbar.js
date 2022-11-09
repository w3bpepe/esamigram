import {React, useState} from "react";


function Searchbar({ setRicerca }){

    return(
        <div className="input-group rounded">
            <input type="search" onChange={e => {setRicerca(e.target.value)}} className="form-control rounded" placeholder="Ricerca Esame..." aria-label="Search" aria-describedby="search-addon" />
        </div>
    )
}

export default Searchbar;