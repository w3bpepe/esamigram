import React from "react";

function Ospedali(props){
    return(
        
        <div className="card border border-dark mb-3">
            <div className="card-header">{props.datiOspedali.Nome}</div>
            <div className="card-body text-dark">
                <h5 className="card-title">{props.datiOspedali.Regione}, {props.datiOspedali.Città}</h5>
                <p className="card-text">{props.datiOspedali.numero}</p>
                <p className="card-text">{props.datiOspedali.esami}</p>
            </div>
        </div>


    )
}

export default Ospedali;