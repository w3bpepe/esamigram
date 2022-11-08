import React from "react";

function Ospedali(props){
    return(
        
        <div className="card border border-dark mb-3">
            {/*Bootstrap card per esporre le strutture, dati presi da props passati a top level */}
            <div className="card-header">{props.datiOspedali.Nome}</div>
            <div className="card-body text-dark">
                <h5 className="card-title">{props.datiOspedali.Regione}, {props.datiOspedali.Città}</h5>
                <p className="card-text">{props.datiOspedali.numero}</p>
                {props.datiOspedali.esami.map(esame => {
                    return <p className="card-text">{esame}</p>
                })}
            </div>
        </div>


    )
}

export default Ospedali;